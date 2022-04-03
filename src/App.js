import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Title } from './components/title/Title';
import { AddForm } from './components/form/AddForm';
import { TaskList } from './components/task-list/TaskList';
import React from 'react';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';
import { BadList } from './components/task-list/BadList';

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
    <Row>
      <Col md="6">
      <TaskList/></Col>
      <Col md="6"> <BadList/></Col>
    </Row>
    {/* total hour alloction'
     */}
      
      <Row>
        <Col>
        <h3>The total allocated hours is:15 hrs</h3>
        </Col>
      </Row>
    
    
      </Container>
    

  </div>
  );
}

export default App;
