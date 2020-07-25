import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Popup.scss';
import cn from 'classnames';

import * as store from '../../store';

import { closePopup } from "../../store/popup";
import { removeTodoItem } from '../../store/todos';
import { removeActiveTodoId } from '../../store/activeTodo';

export const Popup = () => {
  const dispatch = useDispatch();
  const activeTodo = useSelector(store.getActiveTodo);
  const popupStatus = useSelector(store.getPopupStatus);

  const handleCancelRemoveTodo = () => {
    dispatch(removeActiveTodoId());
    dispatch(closePopup());
  }

  const handleRemoveTodo = () => {
    dispatch(removeTodoItem(activeTodo));
    dispatch(removeActiveTodoId());
    dispatch(closePopup());
  }

  return (
    <div className={cn("todo__popup popup", {
      "popup--open": popupStatus
    })}>
      <p>Do you really want to remove this task?</p>
      <div className="popup__controls">
        <button
          className="popup__button"
          type="button"
          onClick={handleRemoveTodo}
        >
          Ok
      </button>
        <button
          className="popup__button popup__button--red"
          type="button"
          onClick={handleCancelRemoveTodo}
        >
          Cancel
      </button>
      </div>
    </div>
  );
}
