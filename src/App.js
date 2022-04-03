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
  const[badList,setBadList]=useState([]);
  const addToTaskList=newInfo=>
  {
    setTaskLists([...taskLists,newInfo]);
  }

  // remove items from the task list
  const removeFromTaskList=i=>
  {
   // alert(i);
   const filterdArg=taskLists.filter((item,index)=> index!==i);
   setTaskLists(filterdArg);
  }
   //shift to bad list
   const shiftToBadList=i=>
   {
     const item=taskLists[i];
    setBadList([...badList,item])
     //get the item  that to be shofted
     //add the item in the bad list
     //remove the item formn the task list
     removeFromTaskList(i)
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
      <TaskList taskLists={taskLists}
      removeFromTaskList={removeFromTaskList}
      shiftToBadList={shiftToBadList}/>
      </Col>
      <Col md="6"> <BadList badLists={badList}/></Col>
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
