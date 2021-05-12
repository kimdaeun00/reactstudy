import React, { useState } from "react";

// 추가해보고 싶은 것
// ref 이용하여 강조 => 왜 안되징
// class component로 바꿔보기

// 엔터키 치면 추가되게 하기
// => 함수형 컴포넌트에서는 this를 안쓰나보다.. 함수형 컴포넌트 일때는
// 메소드 앞에 const가 붙어서 함수를 변수에 저장해서 쓰는 것 같고
// 클래스형 컴포넌트에서는 this를 쓰면서 handler를 사용하는듯

const IterationSample = () => {
  // names는 id와 text를 가지는 list이다. useState를 사용하여 초기화해준다
  const [names, setNames] = useState([
    { id: 1, text: "snowman" },
    { id: 2, text: "ice" },
    { id: 3, text: "snow" },
    { id: 4, text: "wind" },
  ]);
  //   input을 통해서 들어오는 글자 state
  const [inputText, setInputText] = useState("");
  //   input을 통해서 추가될 name의 id, 초기에 names가 id4까지 있어서 5로 초기화
  const [nextId, setNextId] = useState(5);

  //   <input>에 뭔가 들어오면 onChange 메소드에서 inputText state를 그걸로 바꿈
  const onChange = (e) => setInputText(e.target.value);

  //   버튼 클릭 시 배열의 내장함수인 concat으로 inputtext, id를 names에 추가
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    // 다음에 들어올 NAME을 위해서 ID와 INPUTTEXT를 초기화시켜줌
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    // input으로 들어온 id와 같은 name만 제외하고 nextNames를 만들어서 set state
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  const namesList = names.map((name) => (
    // onDoubleClick에다가 함수형이 아니라 그냥 onRemove를 쓰면 리스트도 안나오고 추가도 안됨
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input onKeyPress={keyPress} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;
