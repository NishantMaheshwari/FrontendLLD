import React, { useState } from 'react'
import CommentBox from './CommentBox';

const CommentsThread = ({ comment: { author, content, replies, id }, handleAddComment }) => {

  const [showReplies, setShowReplies] = useState(false);

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
          <div className='px-2 py-0.5 bg-blue-500 rounded-sm cursor-pointer' onClick={() => setShowReplies(prev => !prev)}>
            {showReplies ? 'Hide Replies' : 'Reply'}
          </div>
          <div className='px-2 py-0.5 bg-blue-500 rounded-sm cursor-pointer'>
            Edit
          </div>
          <div className='px-2 py-0.5 bg-blue-500 rounded-sm cursor-pointer'>
            Delete
          </div>
        </div>
      </div>
      <div className='ml-3.5 pt-3 border-l border-gray-300'>
        {
          showReplies &&
          <div className='ml-10'>
            <CommentBox cols={50} handleAddComment={handleAddComment} commentId={id} />
            {
              (replies && replies.length > 0)
                ?
                replies.map((comment) => (
                  <div className='mt-5'>
                    <CommentsThread key={comment.id} comment={comment} handleAddComment={handleAddComment} />
                  </div>
                ))
                :
                'Be the first one to Reply'
            }
          </div>
        }
      </div>
    </div>
  )
}

export default CommentsThread;