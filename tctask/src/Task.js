import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask,deleteTask } from './redux/actions';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
   
    dispatch(deleteTask(task.id));
  };

  const handleDone = () => {
    dispatch(toggleTask(task.id));
  };

  const handleSave = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask(task.id, editedDescription));
      setIsEditing(false);
    }
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleDone} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          
          <Button onClick={handleEdit} variant="primary">Edit</Button>
    
          <Button  onClick={handleDelete} variant="warning">Delete</Button>
      


        </>
      )}
    </div>
  );
};

export default Task;