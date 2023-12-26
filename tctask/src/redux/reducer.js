import { ADD_TASK,EDIT_TASK,TOGGLE_TASK,DELETE_TASK } from "./actionTypes";
import { combineReducers } from 'redux';


const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, description: action.payload.description } : task
      );
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );

      case DELETE_TASK:
        return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const reducer = combineReducers({
  tasks: tasksReducer,
});

export default reducer;