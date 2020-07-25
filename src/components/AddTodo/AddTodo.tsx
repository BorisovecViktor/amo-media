import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.scss';

import { useDispatch } from 'react-redux';
import { addTodoItem } from '../../store/todos';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputError('');
  }

  const newTodo = {
    id: uuidv4(),
    name: inputValue,
    done: false,
  }

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.length > 2) {
      dispatch(addTodoItem(newTodo));
      setInputValue('');
    } else {
      setInputError('The task must be at least 3 characters');
    }
  }

  return (
    <div className="todo__add-task add-task">
      <form
        className="add-task__form"
        action="#"
        onSubmit={handleAddTodo}
      >
        <input
          className="add-task__input"
          onChange={handleInputChange}
          value={inputValue}
          maxLength={50}
          placeholder='Enter task and press "Add Task" button'
        >
        </input>
        <button
          className="add-task__button"
          type="submit"
        >Add Task
        </button>
      </form>
      {
        inputError
        &&
        <span className="add-task__error">{inputError}</span>
      }
    </div>
  );
}
