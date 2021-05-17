import React, { useState, useRef, useCallback } from 'react';
import CommentTemplate from './components/CommentTemplate';
import CommentInsert from './components/CommentInsert';
import CommentList from './components/CommentList';

const App = () => {
  const [comments, setComments] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback(({ username, password, face, text }) => {
    const comment = {
      id: nextId.current,
      username,
      password,
      face,
      text,
    };
    setComments((comments) => comments.concat(comment));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setComments((comments) => comments.filter((comment) => comment.id !== id));
  }, []);

  return (
    <CommentTemplate>
      <CommentInsert onInsert={onInsert} />
      <CommentList comments={comments} onRemove={onRemove} />
    </CommentTemplate>
  );
};

export default App;
