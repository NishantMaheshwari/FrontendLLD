import React from 'react'

const ChatMessage = ({ chat: { name, content } }) => {
  return (
    <div className='flex gap-2 items-center w-full h-[2vw] px-1 border-b-1 border-b-violet-950 rounded-md mb-2'>
      <div className='w-4 h-4 '>
        <img src="images/avatar_default_4.png" alt="user" className='object-cover rounded-md' />
      </div>
      <div className='text-l font-bold'>
        {name}
      </div>
      <div className=' text-gray-800'>
        {content}
      </div>
    </div>
  )
}

export default ChatMessage