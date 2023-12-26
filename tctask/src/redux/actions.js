import  { ADD_TASK,EDIT_TASK,TOGGLE_TASK,DELETE_TASK } from "./actionTypes";

export const addTask = (description) => ({
    type: ADD_TASK,
    payload: {
      id: new Date().getTime(),
      description,
      isDone: false,
    },
  });
  
  export const editTask = (id, description) => ({
    type: EDIT_TASK,
    payload: {
      id,
      description,
    },
  });
  
  export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
  });

  export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
  
  });