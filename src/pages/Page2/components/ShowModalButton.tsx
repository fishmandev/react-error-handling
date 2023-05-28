import Modal from '../../../components/Modal'
import useModal from '../../../components/Modal/useModal'

const ShowModalButton = () => {
  const [isShowing, toggleModal] = useModal()
  const props = {
    show: isShowing,
    onToggle: toggleModal,
    text: 'Modal example!',
  }

  return (
    <>
      <Modal {...props} />
      <button onClick={toggleModal}>Show modal</button>
    </>
  )
}

export default ShowModalButton
