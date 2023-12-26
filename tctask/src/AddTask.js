import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import {  Button,InputGroup,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const AddTask = () => {
  const dispatch = useDispatch();
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== '') {
      dispatch(addTask(newTaskDescription));
      setNewTaskDescription('');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
     
       <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add new Task here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <Button  onClick={handleAddTask} variant="outline-secondary" id="button-addon2">
        Add Task
        </Button>
      </InputGroup>
        </div>
  );
};

export default AddTask;