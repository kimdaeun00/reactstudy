import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  // path에 ? : optional이라는 뜻
  // : 를 이용하여 category라는 파라미터 변수를 넣으면 NewsPage component에 history, location, match가 전달된다.
  // location에서는 쿼리, match에서는 파라미터를 확인할 수 있다.
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
