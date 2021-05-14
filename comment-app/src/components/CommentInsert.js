import React from 'react';
import { MdSend } from 'react-icons/md';
import { FaRegSmileWink, FaRegAngry, FaRegSadTear } from 'react-icons/fa';
import './CommentInsert.scss';
import './CommentInfo.scss';

const CommentInsert = () => {
  return (
    <>
      <form className="CommentInfo">
        <input placeholder="id" />
        <input placeholder="password" />
        <button>
          <FaRegSmileWink />
        </button>
        <button>
          <FaRegAngry />
        </button>
        <button>
          <FaRegSadTear />
        </button>
      </form>

      <form className="CommentInsert">
        <input placeholder="write any comments." />
        <button type="submit">
          <MdSend />
        </button>
      </form>
    </>
  );
};

export default CommentInsert;
