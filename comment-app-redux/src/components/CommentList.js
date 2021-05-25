import React from 'react';
import CommentListItem from './CommentListItem.js';
import './CommentList.scss';

const CommentList = ({ comments, onRemove }) => {
  return (
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentListItem
          comment={comment}
          key={comment.id}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CommentList;
