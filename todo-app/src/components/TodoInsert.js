import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// form 이랑 div랑은 머가다른지?
// form 은 input이랑 비슷한 것! 사용자가 입력한 데이터를 서버로 보낼 때 form 태그 사용

// App.js에서 props로 onInsert를 전달받았다.
const TodoInsert = ({ onInsert }) => {
  // value == '할 일을 입력하세용.'에 입력되는 값
  const [value, setValue] = useState('');
  // insert하는 부분('할 일을 입력하세용.')에 변화가 일어나면 value로 설정
  // useCallback을 사용하면 첫 번째 인자인 함수가 리렌더링될 때마다 생성되는게 아니라 두 번째 인자가 바뀔 때에만 생성
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });
  // button이 눌리면 onSubmit이 된다. value를 리스트에 추가한 뒤 value를 비워준다.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue();
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    // form tag에서 type='submit'인 애가 눌리면 form에 onSubmit이 활성화되는듯
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세용."
        // value 없애도 잘 되는데 이건 대체 무슨 용도인걸까??
        // value={value}
        onChange={onChange}
      />
      <button type="submit">
        {/* 리액트 아이콘 모음에서 버튼 적용하려면 이렇게 태그 안에 child처럼 넣어야하는듯 */}
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
