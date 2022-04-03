
import React from 'react'
import { Col, Form, Row, Table,Button } from 'react-bootstrap'

export const BadList = ({badLists}) => {
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
  <Button variant="primary"><i className="fas fa-arrow-left"></i></Button> 
  </td>
  <td>
  <Button variant="danger"><i className="fas fa-trash"></i></Button> 
         
  </td>
</tr>
    ))}
    
  </tbody>
</Table>
<h4 className="mt-5 text-danger"> YOU COULD HAVE SAVED :20HRS

</h4>
            
            
        
    </div>
  )
}
