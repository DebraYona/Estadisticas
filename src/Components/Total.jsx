

import React from 'react'
import { Col, Row, Form, FormGroup, FormControl, Grid , ControlLabel} from 'react-bootstrap';


const Total =(props) =>(

<Grid>
<Row className="show-grid">
  <Col xs={6} md={4}>
  <Form>
         <FormGroup>
           <ControlLabel >Total: {props.contador}</ControlLabel>
           </FormGroup>

       </Form>
     </Col>
  </Row>
</Grid>

)

export default Total
