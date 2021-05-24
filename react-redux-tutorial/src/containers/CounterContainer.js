// containers/에 있는 컴포넌트들은 리덕스 스토어를 활용하는 컴포넌트이다.
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
// counterContainer이기 때문에 counter action 생성 함수였던 increase와 decrease를 불러와준다.
import { increase, decrease } from '../modules/counter';
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);

// //리덕스 스토어의 state를 props로 전달하기 위함 => CounterContainer의 props로 number가 전달됨
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// //리덕스의 액션 함수를 props로 전달하기 위함 => CounterContainer의 props로 increase, decrease가 전달됨
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// // const makeContainer=connect(mapStateToProps, mapDispatchToProps)
// // makeContainer(CounterContainer)
// // => 리덕스와 연동된 CounterContainer
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
