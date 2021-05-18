import React, { useCallback, useState } from 'react';
import { MdSend } from 'react-icons/md';
import './CommentInsert.scss';
import './CommentInfo.scss';
import FaceButtons from './FaceButtons';

const CommentInsert = ({ onInsert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [face, setFace] = useState(0);
  const [text, setText] = useState('');

  const resetStates = () => {
    setUsername('');
    setPassword('');
    setFace(0);
    setText('');
  };

  const onUserChange = useCallback((e) => {
    setUsername(e.target.value);
  });
  const onPwChange = useCallback((e) => {
    setPassword(e.target.value);
  });
  const onTextChange = useCallback((e) => {
    setText(e.target.value);
  });
  const onFaceChange = useCallback((facenum) => {
    setFace(facenum);
  });
  const onSubmit = useCallback(
    (e) => {
      onInsert({ username, password, face, text });
      resetStates();
      e.preventDefault();
    },
    [onInsert, username, password, face, text],
  );

  return (
    <>
      <form className="CommentInfo" onSubmit={onSubmit}>
        <div className="Info">
          <input
            placeholder="username"
            value={username}
            onChange={onUserChange}
          />
          <input
            placeholder="password"
            value={password}
            onChange={onPwChange}
          />
          <FaceButtons onFaceChange={onFaceChange} />
        </div>
        <div className="CommentInsert">
          <input
            placeholder="write any comments."
            value={text}
            onChange={onTextChange}
          />
          <button type="submit">
            <MdSend />
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentInsert;
