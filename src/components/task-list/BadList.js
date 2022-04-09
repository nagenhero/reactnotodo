
import React from 'react'
import { Col, Form, Row, Table,Button } from 'react-bootstrap'

export const BadList = ({badLists,removeFromBadList,shiftToTaskList, badListTotalHr}) => {
  return (
    <div > 
        
           
                <h2 className='text-center'>Bad list</h2>
                <hr/>
                {/* this table for task list */}
                <Table striped  hover>
  
  <tbody>
    {
    badLists.map((item,i)=>(

    

  <tr key={i}>
    <td><Form.Check type="checkbox" label="Check me out" /></td>
  <td>{item.task}</td>
  <td>{item.hr}</td>
  
  <td>
  <Button variant="primary" onClick={()=>shiftToTaskList(i)}><i className="fas fa-arrow-left"></i></Button> 
  </td>
  <td>
  <Button variant="danger" onClick={()=>removeFromBadList(i)}><i className="fas fa-trash"></i></Button> 
         
  </td>
</tr>
    ))}
    
  </tbody>
</Table>
<h4 className="mt-5 text-danger"> YOU COULD HAVE SAVED :{ badListTotalHr} HRS

</h4>
            
            
        
    </div>
  )
}
