import React, { useState } from 'react'
import Toast from './Toast';

const useToast = (position = 'top-right') => {
  const [toasts, setToasts] = useState([]);

  const handleRemove = (toastId) => {
    setToasts(prev => prev.filter(toast => toast.id !== toastId));
  }

  const handleAddingToast = (type, text, duration) => {
    setToasts(prev => {
      const currentId = Date.now();
      return [...prev, { id: currentId, type, text, duration }];
    });
  }

  function getToastContainer() {
    return (
      <div data-position={position} className='toasts'>
        {
          toasts.map(toast => {
            return (
              <Toast key={toast.id} toast={toast} onClose={handleRemove} />
            )
          })
        }
      </div>
    )
  }

  return [getToastContainer(),handleAddingToast];
}

export default useToast