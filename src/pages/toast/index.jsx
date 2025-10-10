import React from 'react'
import './styles.css'
import useToast from './useToast'

const ToastContainer = () => {
  const [ToastContainer, handleAddingToast] = useToast();
  return (
    <div className='toast-container'>
      <button className='toast-btn' onClick={() => handleAddingToast('success', 'Congratulations!!')}>
        Success
      </button>
      <button className='toast-btn' onClick={() => handleAddingToast('failure', 'Better luck next time.')}>
        Failure
      </button>
      {ToastContainer}
    </div>
  )
}

export default ToastContainer;