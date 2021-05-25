import React, { useState, useRef, useCallback } from 'react';
import CommentTemplate from './components/CommentTemplate';
import CommentInsert from './components/CommentInsert';
import CommentList from './components/CommentList';

const checkEmpty = ({ username, password, face, text }) => {
  const checkusername = username !== '';
  const checkpw = password !== '';
  const checkface = face !== 0;
  const checktext = text !== '';

  if (checkusername && checkpw && checkface && checktext) {
    return false;
  }
  return true;
};

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
    const isEmpty = checkEmpty({ username, password, face, text });
    if (isEmpty) {
      alert('All informations should be filled.');
    } else {
      setComments((comments) => comments.concat(comment));
      nextId.current += 1;
    }
  }, []);

  const onRemove = useCallback(({ id, password, typedPw }) => {
    if (password === typedPw) {
      setComments((comments) =>
        comments.filter((comment) => comment.id !== id),
      );
    } else {
      alert('Wrong Password!');
    }
  }, []);

  return (
    <CommentTemplate>
      <CommentInsert onInsert={onInsert} />
      <CommentList comments={comments} onRemove={onRemove} />
    </CommentTemplate>
  );
};

export default App;
