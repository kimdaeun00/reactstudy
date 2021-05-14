import React from 'react';
import './CommentTemplate.scss';

const CommentTemplate = ({ children }) => {
  return (
    <div className="CommentTemplate">
      <div className="app-title">Write Comment</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default CommentTemplate;
