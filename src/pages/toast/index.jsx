import React from 'react'
import './styles.css'
import useToast from './useToast'

const ToastContainer = () => {
  const [ToastContainer, handleAddingToast] = useToast();
  return (
    <div className='toast-container'>
      <button className='toast-btn' onClick={() => handleAddingToast('success', 'Congratulations!!', 3000)}>
        Success
      </button>
      <button className='toast-btn' onClick={() => handleAddingToast('failure', 'Better luck next time.', 3000)}>
        Failure
      </button>
      {ToastContainer}
    </div>
  )
}

export default ToastContainer;