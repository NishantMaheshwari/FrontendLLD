import React from 'react'

const TabNavigation = ({ tabs, setActiveTab }) => {

  const handleTabClick = (step) => {
    setActiveTab(step);
  }
  console.lo
  return (
    <div className='flex gap-2'>
      {
        tabs.map((tab) => {
          return (
            <div key={tab.step} className='w-30 h-10 border border-black flex justify-center items-center cursor-pointer' onClick={() => handleTabClick(tab.step)}>
              {tab.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default TabNavigation