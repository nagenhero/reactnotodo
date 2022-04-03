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
  
  return (
  <div className='wrapper'>
    <Container>
      {/* title compnent */}
      <Title /> 
 
      {/* form componet */}
      <AddForm />
      <hr/>
      
    {/* task list componts */}
      </Container>
      <TaskList/>

  </div>
  );
}

export default App;
