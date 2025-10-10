import React from 'react'

const Toast = ({toast: {type, text, id},onClose}) => {
  return (
    <div data-type={type} className='toast'>
      <div className='toast-text'>
        {text}
      </div>
      <div className='toast-cross' onClick={() => onClose(id)}>
        X
      </div>
    </div>
  )
}

export default Toast