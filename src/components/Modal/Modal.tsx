import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import useOnClickOutside from "use-onclickoutside";

import styles from "./Modal.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  width?: number | string;
  height?: number | string;
  overlayClassName?: string;
  modalClassName?: string;
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  isCentered?: boolean;
};

const Modal: React.FC<Props> = ({
  isOpen,
  width,
  height,
  overlayClassName,
  modalClassName,
  closeButton = true,
  closeOnClickOutside = true,
  isCentered = true,
  onClose,
  children,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, closeOnClickOutside && onClose);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      <div
        className={clsx(
          styles.modal__overlay,
          overlayClassName && overlayClassName
        )}
      />
      <div
        className={clsx(
          styles.modal__wrapper,
          isCentered && styles.modal__wrapper_centered
        )}
        aria-modal
        aria-hidden
        aria-label="modal"
        tabIndex={-1}
        role="dialog"
      >
        <div
          className={clsx(styles.modal__body, modalClassName && modalClassName)}
          style={{ width: width, height: height }}
          ref={ref}
        >
          {closeButton && (
            <button
              type="button"
              className={styles.modal__closeButton}
              data-dismiss="modal"
              aria-label="close"
              onClick={onClose}
            />
          )}
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
