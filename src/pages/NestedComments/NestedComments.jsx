import React, { useState } from 'react'
import { commentsData } from '../../data/comments'
import CommentsThread from './CommentsThread'

const NestedComments = () => {
  const [comments, setComments] = useState(commentsData);

  const findNode = (nodesArray, id) => {
    for (const node of nodesArray) {
      if (node.id === id) return node;
      if (node.replies && node.replies.length > 0) {
        const res = findNode(node.replies, id)
        if (res) return res;
      }
    }
    return null;
  }

  const handleAddComment = (commentId, content) => {
    const newComments = [...comments];
    const reqComment = findNode(newComments, commentId);
    reqComment.replies.push({
      id: '',
      author: 'Player',
      content: content,
      replies: [],
      timestamp: new Date().toISOString()
    });
    setComments(newComments);
  }

  return (
    <div className="m-8 max-w-2xl">
      {comments.map((comment) => (
        <CommentsThread key={comment.id} comment={comment} handleAddComment={handleAddComment} />
      ))}
    </div>
  )
}

export default NestedComments