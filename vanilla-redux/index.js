import { createStore } from "redux";
// 수정할 DOM NODE를 가리키는 값 선언
const divToggle = document.querySelector(".toggle");
const counter = documnet.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션의 이름 정의 (보통 대문자)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수 작성
// type 값은 무조건 갖고 있어야 함
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//  초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서(변화를 일으키는 함수) 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// render : 상태가 업데이트 될때마다 호출
const render = () => {
  //현재 상태 불러오기
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};
render();
// 스토어의 상태가 바뀔 때마다 render함수가 호출되도록 한다.
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
