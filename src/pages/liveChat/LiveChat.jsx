import React from 'react'
import VideoStream from './VideoStream'
import ChatWindow from './ChatWindow'

const LiveChat = () => {
  return (
    <div className='w-full h-[45vw] flex justify-between p-5 mt-5 mb-5'>
      <VideoStream/>
      <ChatWindow/>
    </div>
  )
}

export default LiveChat