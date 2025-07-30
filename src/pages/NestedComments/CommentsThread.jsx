import React from 'react'

const CommentsThread = ({ comment: { author, content, replies } }) => {
  return (
    <div className='w-full mb-5'>
      <div className='flex gap-2 align-middle'>
        <img src="images/avatar_default_4.png" alt="user" className='object-cover w-7 h-7 rounded-[50%]' />
        <div className='pt-1 text-black-50 font-bold'>{author}</div>
      </div>
      <div className='ml-3.5 pl-4.5 border-l border-gray-300'>
        <div>
          {content}
        </div>
        <div className='flex align-middle gap-2'>
          <div>
            Reply
          </div>
        </div>
      </div>
      <div className='ml-3.5 border-l border-gray-300'>
        {
          replies && replies.length > 0 &&
          replies.map((comment) => (
            <div className='ml-10'>
              <CommentsThread key={comment.id} comment={comment} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CommentsThread;