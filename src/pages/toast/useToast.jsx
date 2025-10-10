import React, { useState } from 'react'
import Toast from './Toast';

const useToast = (position = 'top-right') => {
  const [toasts, setToasts] = useState([]);

  const handleRemove = (toastId) => {
    setToasts(prev => prev.filter(toast => toast.id !== toastId));
  }

  const handleAddingToast = (type, text) => {
    setToasts(prev => {
      const currentId = Date.now();
      setTimeout(() => {
        handleRemove(currentId);
      }, 3000);
      return [...prev, { id: currentId, type, text }];
    });
  }

  function getToastContainer() {
    return (
      <div data-position={position} className='toasts'>
        {
          toasts.map(toast => {
            return (
              <Toast toast={toast} onClose={handleRemove} />
            )
          })
        }
      </div>
    )
  }

  return [getToastContainer(),handleAddingToast];
}

export default useToast