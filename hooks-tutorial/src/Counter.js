import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // 첫번째인자 : reducer, 두번째인자 : state의 기본값
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* dispatch(action)의 형태, 함수 안에 파라미터로 action 값(action.type이 있는 객체)을 입력하면 reducer함수 호출 */}
      {/* 원래는 up onClick handler랑 down onClick handler를 따로 만들어서 component update를 component 안에서 해줬지만 reducer는 바깥에서 함 */}
      {/* dispatch()의 인자 : reducer의 action */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
