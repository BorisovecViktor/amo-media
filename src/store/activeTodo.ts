import { Action } from 'redux';

const SET_ACTIVE_TODO_ID = 'SET_ACTIVE_TODO_ID';
const REMOVE_ACTIVE_TODO_ID = 'REMOVE_ACTIVE_TODO_ID';

type SetActiveTodoIdAction = Action<typeof SET_ACTIVE_TODO_ID> & {
  id: string;
};

type RemoveActiveTodoIdAction = Action<typeof REMOVE_ACTIVE_TODO_ID>;

export const setActiveTodoId = (id: string) => ({
  type: SET_ACTIVE_TODO_ID,
  id,
});

export const removeActiveTodoId = () => ({ type: REMOVE_ACTIVE_TODO_ID });

type PossibleActions = SetActiveTodoIdAction | RemoveActiveTodoIdAction;

const reducer = (id = null, action: PossibleActions) => {
  switch (action.type) {
    case SET_ACTIVE_TODO_ID:
      return action.id;

    case REMOVE_ACTIVE_TODO_ID:
      return null;

    default:
      return id;
  }
};

export default reducer;
