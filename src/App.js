import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Title } from './components/title/Title';
import { AddForm } from './components/form/AddForm';
import { TaskList } from './components/task-list/TaskList';
import React from 'react';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';

const App=() =>{
  //state to store all the task lists
  const[taskLists,setTaskLists]=useState([]);
  const addToTaskList=taskObj=>
  {
    setTaskLists([...taskLists,taskObj]);
  }
  return (
  <div className='wrapper'>
    <Container>
      {/* title compnent */}
      <Title /> 
 
      {/* form componet */}
      <AddForm addToTaskList={addToTaskList}/>
      <hr/>
      
    {/* task list componts */}
      </Container>
      <TaskList/>

  </div>
  );
}

export default App;
