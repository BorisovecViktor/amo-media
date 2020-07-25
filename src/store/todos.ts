import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';

type AddTodoAction = Action<typeof ADD_TODO> & {
  todo: Todo,
};

type RemoveTodoAction = Action<typeof REMOVE_TODO> & {
  id: string;
};

type ToggleTodoStatusAction = Action<typeof TOGGLE_TODO_STATUS> & {
  id: string;
};

export const addTodoItem = (todo: Todo) => ({
  type: ADD_TODO,
  todo,
});

export const removeTodoItem = (id: string) => ({
  type: REMOVE_TODO,
  id,
});

export const toggleTodoStatus = (id: string) => ({
  type: TOGGLE_TODO_STATUS,
  id,
});

const initialState: Todo[] = [
  {
    id: uuidv4(),
    name: 'Learn English',
    done: false,
  },
  {
    id: uuidv4(),
    name: 'Make a Homework',
    done: true,
  },
  {
    id: uuidv4(),
    name: 'Learn React',
    done: false,
  }
]

type PossibleActions =
  AddTodoAction | RemoveTodoAction | ToggleTodoStatusAction;

const reducer = (todos: Todo[] = initialState, action: PossibleActions) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        action.todo,
      ];

    case REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO_STATUS:
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            done: !todo.done,
          }
        }

        return todo;
      });

    default:
      return todos;
  }
};

export default reducer;
