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

const weeklyHrs=24*7;
const App=() =>{
  //state to store all the task lists
  const[taskLists,setTaskLists]=useState([]);
  const[badList,setBadList]=useState([]);
  const deleteTask=()=>
  {
    return window.confirm("are you sure you want to delete");
  }

  // remove items from the task list
  const removeFromTaskList=i=>
  {

   // alert(i);
   if(deleteTask())
   {
    const filterdArg=taskLists.filter((item,index)=> index!==i);
    setTaskLists(filterdArg);

   }
  
  }
   // remove items from the bad list
   const removeFromBadList=i=>
   {
    // alert(i);
    
   if(deleteTask())
   {
    const filterdArg=badList.filter((item,index)=> index!==i);
    setBadList(filterdArg);
   }
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
  
    //shift to bad list to takslist
    const shiftToTaskList=i=>{
      const item=badList[i];
     setTaskLists([...taskLists,item])
      //get the item  that to be shofted
      //add the item in the bad list
      //remove the item formn the task list
      removeFromBadList(i)
    }
  
  const taskListTotalHr=taskLists.reduce((acc,item)=>acc + +item.hr,0);
  const badListTotalHr=badList.reduce((acc,item)=>acc + +item.hr,0);
   const ttlHrs=taskListTotalHr+badListTotalHr;
   const addToTaskList=newInfo=>
   {
     if(ttlHrs + +newInfo.hr<=weeklyHrs)
     {
       console.log(ttlHrs);
     setTaskLists([...taskLists,newInfo]);
     }
     else
     {
       alert("you have excedded weekly hour which must be less than 168 hrs");
     }
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
      <Col md="6"> <BadList badLists={badList} removeFromBadList={removeFromBadList} shiftToTaskList={shiftToTaskList} badListTotalHr={badListTotalHr}
      /></Col>
    </Row>
    {/* total hour alloction'
     */}
      
      <Row>
        <Col>
        <h3>The total allocated hours is:{ttlHrs}hrs</h3>
        </Col>
      </Row>
    
    
      </Container>
    

  </div>
  );
}

export default App;
