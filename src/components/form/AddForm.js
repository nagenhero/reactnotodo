import React, {useState} from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
const initialState={
  task:"",
  hr:"",
};

export const AddForm = ({addToTaskList}) => {
  const [newInfo,setNewInfo]=useState(initialState);
  const handleChange =e=>
  {
    const{name,value}=e.target;
    setNewInfo(
      {
        ...newInfo,
        [name]:value,
      }
    )
  }
  const handleSubmit=e=>
  {
    e.preventDefault();
    addToTaskList(newInfo);
  }
  return (
    <div>
    <Form onSubmit={handleSubmit} >
  <Row className='g-2'>
    <Col md={7}>
      <Form.Control name="task" placeholder="Task"  required onChange={handleChange}/>
    </Col>
    <Col md={3}>
      <Form.Control name="hr" placeholder="Hour" required onChange={handleChange} />
    </Col >
    <Col md={3}>
    <Button variant="primary" type='submit'>Add TASK</Button>
    </Col>
  </Row>
</Form>
</div>
  )
}

