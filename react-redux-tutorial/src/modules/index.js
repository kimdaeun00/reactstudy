import { combineReducers } from 'redux';
// 리듀서 함수들 import
import counter from './counter';
import todos from './todos';

// 스토어는 하나만 있어야 하는데, 리듀서 함수들이 여러개면 combineReducers를 통해서 store를 만들 때 넣을 reducer를 하나로 만들어 준다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
