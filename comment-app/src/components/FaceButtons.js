import { FaRegSmileWink, FaRegAngry, FaRegSadTear } from 'react-icons/fa';
import React, { useCallback, useState } from 'react';
import './FaceButtons.scss';
import cn from 'classnames';

const FaceButtons = ({ onFaceChange }) => {
  const [smile, setSmile] = useState(false);
  const [angry, setAngry] = useState(false);
  const [sad, setSad] = useState(false);
  const resetButtons = () => {
    setSmile(false);
    setAngry(false);
    setSad(false);
  };
  const onClickSmile = useCallback(() => {
    resetButtons();
    setSmile(true);
    onFaceChange(1);
  }, [smile]);
  const onClickAngry = useCallback(() => {
    resetButtons();
    setAngry(true);
    onFaceChange(2);
  }, [angry]);
  const onClickSad = useCallback(() => {
    resetButtons();
    setSad(true);
    onFaceChange(3);
  }, [sad]);

  return (
    <div>
      <button
        type="button"
        className={cn({ smile })}
        onClick={() => onClickSmile()}
      >
        <FaRegSmileWink />
      </button>
      <button
        type="button"
        className={cn({ angry })}
        onClick={() => onClickAngry()}
      >
        <FaRegAngry />
      </button>
      <button
        type="button"
        className={cn({ sad })}
        onClick={() => onClickSad()}
      >
        <FaRegSadTear />
      </button>
    </div>
  );
};

export default FaceButtons;
