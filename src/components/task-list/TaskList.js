
import React from 'react'
import { Col, Form, Row, Table,Button } from 'react-bootstrap'

export const TaskList = () => {
  return (
    <div > 
        
           
                <h2 className='text-center'>Task list</h2>
                <hr/>
                {/* this table for task list */}
                <Table striped  hover>
  
  <tbody>
  <tr>
    <td><Form.Check type="checkbox" label="Check me out" /></td>
  <td>task name</td>
  <td>10hr</td>
  <td>
  <Button variant="danger"><i className="fas fa-trash"></i></Button> 
         
  </td>
  <td>
  <Button variant="success"><i className="fas fa-arrow-right"></i></Button> 
  </td>
</tr>
    
    
  </tbody>
</Table>
            
            
        
    </div>
  )
}
