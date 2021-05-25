import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// 앞의 export를 통해서 다른 파일에서 increase나 decrease를 참조 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// counter모듈의 초기 상태
const initialState = {
  number: 0,
};

// // 리듀서 함수 : action을 실제로 실행하는..
// // 처음 받는 parameter : 초기 state, action(increase, decrease)
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },

  initialState,
);

// export default는 1개만 내보낼 수 있다.
// action함수 (increase, decrease) 는 export default 말고 export를 했음
// export는 여러 개를 내보냄
export default counter;
