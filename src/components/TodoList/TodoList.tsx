import React from 'react';
import { useSelector } from 'react-redux';
import './TodoList.scss'

import * as store from '../../store';

import { Todo } from '../Todo/Todo';

export const TodoList = () => {
  const todos = useSelector(store.getVisibleTodos);

  return (
    <ul className="todo__list">
      {todos.map(todo => (
        <li key={todo.id} className="todo__item">
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}
