import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';

// 스토어 생성
// 첫 번째 인자가 reducer함수, 두 번째 인자는 크롬 개발자도구사용을 위한..
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  //App.js에서 스토어를 사용할 수 있도록 'react-redux'의 Provider로 감싸준다.
  // Provider는 store를 props로 전달
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
