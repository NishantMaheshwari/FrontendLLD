import React from 'react'
import { comments } from '../../data/comments'
import CommentsThread from './CommentsThread'

const NestedComments = () => {
  return (
    <div className="m-8 max-w-2xl">
      {comments.map((comment) => (
        <CommentsThread key={comment.id} comment={comment}/>
      ))}
    </div>
  )
}

export default NestedComments