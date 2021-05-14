import React from 'react';
import './TodoTemplate.scss';

// TodoTemplate은 왜 필요한가?? app-title과 content style을 구분하기 위해 필요.
// content 부분은 그냥 똑같이 생기면 되기 때문에 TodoTemplate으로 감싸는 children에 적용

// 함수형 컴포넌트 선언 시에 처음 인자로 받아오는 값이 부모에게서 받아오는 (App.js에서 받는) props값이다.
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
