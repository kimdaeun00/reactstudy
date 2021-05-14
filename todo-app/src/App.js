import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  // DOM에 nextId가 쓰이는 것도 아닌데 왜 useRef를 쓰는건지 모르겠음
  // <TodoInsert>에 쓰이는 onInsert안에다가 써야 해서 그런가
  // useRef가 특정 DOM을 선택하는 것 외에도 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리할 때 쓴다고 함
  // 원래 컴포넌트 내에서의 변수는 리렌더링 되고 난 이후에 조회할 수 있는데, useRef는 설정 후 리렌더링 필요없이 바로 조회 가능
  const nextId = useRef(4);

  // 함수들 다 useCallback으로 감싸는 이유 : 컴포넌트의 성능 아끼기
  //     props로 전달해야 할 함수를 만들 때는 useCallback을 사용하여 함수를 감싸야 함

  // todos가 바뀌었다면 새로운 todo를 todos(list)에 추가한다.
  // todos가 바뀌었다면 => todos를 바꿔야 하기 때문에 todos에 추가한 게 더 큰듯?
  const onInsert = useCallback(
    // text는 왜 바로 쓰일 수 있는걸까? todos의 element의 멤버라서 바로 사용할 수 있는건가
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  // remove가 필요할 때와 todos에 변화가 생겼을 시 그 id만 제외하고 다시 가져오기
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 완료된 todo의 id 받아옴 => 완료된 id만 todo의 checked member를 바꿔준다.
  // 여러 멤버로 되어 있는 object에서 멤버 하나를 바꾸려면 ...todo 로 모든 멤버를 받아와준 후에 변경한다.
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
