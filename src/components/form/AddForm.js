import React, {useState} from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
const initialState={
  task:"",
  hr:"",
};

export const AddForm = (addTaskList) => {
  

  return (
    <div>
    <Form >
  <Row className='g-2'>
    <Col md={7}>
      <Form.Control name="task" placeholder="Task"  required/>
    </Col>
    <Col md={3}>
      <Form.Control name="hr" placeholder="Hour" required />
    </Col >
    <Col md={3}>
    <Button variant="primary">Add TASK</Button>
    </Col>
  </Row>
</Form>
</div>
  )
}

