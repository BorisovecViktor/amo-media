import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import todosReducer from './todos';
import searchReducer from './search';
import popupStatusReducer from "./popup";
import activeTodoReducer from "./activeTodo";

const rootReducer = combineReducers({
  todos: todosReducer,
  searchQuery: searchReducer,
  popupStatus: popupStatusReducer,
  activeTodo: activeTodoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getPopupStatus = (state: RootState) => state.popupStatus;
export const getActiveTodo = (state: RootState) => state.activeTodo;

export const getVisibleTodos = (state: RootState) => {
  let visibleTodos: Todo[] = state.todos.filter((todo: Todo) => {
    if (state.searchQuery !== '') {
      return (`${todo.name.toLowerCase()}`).includes(state.searchQuery);
    }

    return todo;
  });

  return visibleTodos;
}

const persistedState = localStorage.getItem('rootState')
  ? JSON.parse(localStorage.getItem('rootState') || '')
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('rootState', JSON.stringify(store.getState()));
});

export default store;
