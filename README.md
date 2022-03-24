# snap-react-modal

As easy as your fingers snap modal using `createPortal`.

Demo: https://snap-components.netlify.app/?path=/story/snap-modal--basic

## Install

`npm install snap-react-modal`

## As easy as your fingers snap 👌

~~~js
<Modal isOpen={isOpen} onClose={() => setOpen(false)}>
  This is so easy!
</Modal>
~~~

## Simply modify styles and control dimensions

~~~js
import Modal from "snap-react-modal";

function App() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        overlayClassName="overlayStyles" //this class modifies overlay styles
        modalClassName="modalStyles" //and this modifies modal container
        width={500} //easy to control dimensions
        height={500}
      >
        Still so easy!
      </Modal>
    </div>
  );
}
~~~

## Props

- `isOpen`: defines if the modal open or not (required)
- `onClose`: to close the modal (required)
- `width`: defines the width of the modal
- `height`: defines the height of the modal
- `overlayClassName`: overrides overlay of the modal (note: please use `!important` property in your css to make sure styles will apply)
- `modalClassName`: overrides main container of the modal (note: please use `!important` property in your css to make sure that styles will apply)
- `closeButton`: defines if the default close button is showing
- `closeOnClickOutside`: defines if the modal is closable on outside click
- `isCentered`: defines if the modal is vertically centered (set false to enable scrollable wrapper)
