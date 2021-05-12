import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  //   useCallback => 함수 재사용 시 유용 useMemo=> 값 재사용 시 유용
  //   useCallback  1st param : 생성하고자 하는 함수, 2st param : 어떤 것의 변화를 볼 지 list
  //   컴포넌트가 처음 생성될 때에만 setNumber함수 생성
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  //   number 또는 list가 바뀌었을 때만 setList,setNumber함수 생성
  //  첫번째 param의 함수 안에서 number와 list를 사용하기 때문에, 2nd param 안에는 무조건 number, list가 있어야 함
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    // useRef를 통해서 input태그에 focus할수있음
    inputEl.current.focus();
  }, [number, list]);

  //   [list] 값이 바뀌었을 때 (onInsert를 통해 )만 getAverage(list) 함수를실행한다.
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <b>평균값:</b> {avg}
    </div>
  );
};

export default Average;
