
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store/todoSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Math.random(),
      text,
      completed: false
    }));
    setText('');
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
