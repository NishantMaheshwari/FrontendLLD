import React, { useState } from 'react'

const CommentBox = ({ cols, handleAddComment, commentId }) => {
  const [comment, setComment] = useState('');
  return (
    <div className="flex gap-3">
      <textarea
        name="message"
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        cols={cols}
        placeholder="Add a comment here..."
        className="p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed hover:cursor-pointer w-30"
        disabled={comment.trim() === ''}
        onClick={() => {
          handleAddComment(commentId, comment)
          setComment('');
        }}
      >
        Submit
      </button>
    </div>

  )
}

export default CommentBox