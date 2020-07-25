import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import cn from 'classnames';

import * as store from './store';

import {SearchTodo} from './components/SearchTodo/SearchTodo';
import {TodoList} from './components/TodoList/TodoList';
import {AddTodo} from './components/AddTodo/AddTodo';
import {Popup} from './components/Popup/Popup';

const App = () => {
  const popupStatus = useSelector(store.getPopupStatus);

  return (
    <div className="app">
      <main className="content">
        <div className="todo">
          {popupStatus && <Popup />}
          <div
            className={cn('layout', {
              "layout--active": popupStatus,
            })}
          >
          </div>
          <SearchTodo />
          <TodoList />
          <AddTodo />
        </div>
      </main>
    </div>
  );
};

export default App;
