import { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

interface IModal {
  show: boolean
  onToggle: MouseEventHandler<HTMLButtonElement> | undefined
  text: string
}

const Modal = (props: IModal) => {
  const { show, onToggle, text } = props

  return show
    ? ReactDOM.createPortal(
        <div className='modal-wrapper'>
          <div className='modal'>
            <div className='body'>{text}</div>
            <div className='footer'>
              <button onClick={onToggle}>Close</button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null
}

export default Modal
