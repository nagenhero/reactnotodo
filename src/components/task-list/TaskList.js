
import React from 'react'
import { Col, Form, Row, Table,Button } from 'react-bootstrap'

export const TaskList = ({taskLists,removeFromTaskList,shiftToBadList}) => {
  return (
    <div > 
        
           
                <h2 className='text-center'>Task list</h2>
                <hr/>
                {/* this table for task list */}
                <Table striped  hover>
  
  <tbody>
    {
    taskLists.map((item,i)=>(
    <tr key={i}>
    <td><Form.Check type="checkbox" /></td>
  <td>{item.task}</td>
  <td>{item.hr}hrs</td>
  <td>
  <Button variant="danger"><i className="fas fa-trash" onClick={()=>removeFromTaskList(i)}></i></Button> 
         
  </td>
  <td>
  <Button variant="success"><i className="fas fa-arrow-right" onClick={()=>shiftToBadList(i)}></i></Button> 
  </td>
</tr>
    ))}
    
  </tbody>
</Table>
            
            
        
    </div>
  )
}
