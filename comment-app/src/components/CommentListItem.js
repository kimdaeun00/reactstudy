import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaRegSmileWink, FaRegAngry, FaRegSadTear } from 'react-icons/fa';

import './CommentListItem.scss';

const CommentListItem = ({ comment, onRemove }) => {
  const { id, username, password, face, text } = comment;

  const [typedPw, setTypedPw] = useState('');
  const onChange = (e) => {
    setTypedPw(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="CommentListItem">
      <div className="profile">
        <div className="username">{username}</div>
        <div className="face">
          {face === 1 ? (
            <FaRegSmileWink />
          ) : face === 2 ? (
            <FaRegAngry />
          ) : (
            <FaRegSadTear />
          )}
        </div>
      </div>
      <div className="text">{text}</div>
      <div className="remove">
        <RiDeleteBinLine onClick={() => onRemove({ id, password, typedPw })} />
        <input className="password" value={typedPw} onChange={onChange}></input>
      </div>
    </div>
  );
};

export default CommentListItem;
