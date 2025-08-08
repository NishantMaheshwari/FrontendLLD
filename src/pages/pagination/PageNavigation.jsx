import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const WINDOW_SIZE = 3;

const PageNavigation = ({ activePage, setActivePage, totalPages }) => {
  const startPage = Math.max(1, Math.min(activePage - 1, totalPages - WINDOW_SIZE + 1));
  const endPage = startPage + WINDOW_SIZE - 1;
  const pageNumbers = Array.
    from({ length: endPage - startPage + 1 }).
    map((_, index) => {
      return startPage + index;
    });

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const handleNextPage = () => {
    setActivePage((prev) => prev + 1);
  }

  const handlePrevPage = () => {
    setActivePage((prev) => prev - 1);
  }

  return (
    <div className='flex gap-4 justify-center items-center'>
      {activePage > 1 && <IoIosArrowBack className='text-2xl cursor-pointer' onClick={handlePrevPage} />}
      <div className='flex gap-2'>
        {
          startPage > 1 && (
            <>
              <div className='w-4 h-4 cursor-pointer' onClick={() => handlePageChange(1)}>
                1
              </div>
              <div className='h-4'>
                ....
              </div>
            </>
          )
        }
        {
          pageNumbers.map((number, index) => {
            let numberClass = 'w-4 h-4 cursor-pointer';
            if (number === activePage) numberClass += ' text-blue-600'
            return (
              <div key={index} className={numberClass} onClick={() => handlePageChange(number)}>
                {number}
              </div>
            )
          })
        }
        {
          endPage < totalPages && (
            <>
              <div className='h-4'>
                ....
              </div>
              <div className='w-4 h-4 cursor-pointer' onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </div>
            </>
          )
        }
      </div>
      {activePage < totalPages && <IoIosArrowForward className='text-2xl cursor-pointer' onClick={handleNextPage} />}
    </div>
  )
}

export default PageNavigation