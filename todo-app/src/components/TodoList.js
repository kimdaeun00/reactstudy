import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// App.js에서 받은 3개의 props: todos,onRemove, onToggle
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {/* todos list를 받아서 각각을 todolistitem으로 mapping */}
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
