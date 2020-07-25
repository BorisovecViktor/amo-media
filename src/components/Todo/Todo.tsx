import React from 'react';
import './Todo.scss';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { openPopup } from "../../store/popup";
import { toggleTodoStatus } from '../../store/todos';
import { setActiveTodoId } from '../../store/activeTodo';

type Props = {
  todo: Todo;
};

export const Todo: React.FC<Props> = ({ todo }) => {
  const { id, name, done } = todo;
  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    dispatch(setActiveTodoId(id));
    dispatch(openPopup());
  }

  const handleToggleTodoStatus = () => {
    dispatch(toggleTodoStatus(id));
  }

  return (
    <>
      <span
        className={cn('todo__text', {
          'todo__text--dissabled': done
        })}
        onClick={handleToggleTodoStatus}
      >
        {name}
      </span>
      {
        done && (
          <button
            className="todo__remove-task"
            type="button"
            onClick={handleOpenPopup}
          >
            Delete
          </button>
        )
      }
    </>
  );
}
