
import React from 'react'
import { Form,Button } from 'react-bootstrap'

export const FormRow = () => {
  return (
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
  )
}
