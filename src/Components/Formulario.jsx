import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Input, FieldGroup , FormText } from 'react-bootstrap';
import './index.css';
class Formulario extends Component{
  render(){
    return(
      <div className="formulario" >
        <Form inline>
          <FormGroup className= "col-xs-6 " >
            < FormControl
             id="formEstadistica"
             type = " text "
             placeholder = " Sede "
             />
             < FormControl
              id="formEstadistica"
              type = " text "
              placeholder = " Facultad "
              />
              < FormControl
               id="formEstadistica"
               type = " text "
               placeholder = " Escuela "
               />

             <FormGroup controlId="formControlsSelect">
                <FormControl type="select" componentClass="select" placeholder="Sexo">
                  <option value="">Sexo</option>
                  <option value="femenino"> Femenino </option>
                  <option value="masculino"> Masculino </option>
                </FormControl>
              </FormGroup>
         </FormGroup>
           <FormGroup inline >
              < FormControl id="formEstadistica" type = " text "  placeholder = " Desde "  />
              < FormControl id="formEstadistica" type = " text "  placeholder = " Hasta "  />
              <Button type="submit">Buscar</Button>
           </FormGroup>


        </Form>

      </div>

    )
  }
}

export default Formulario;
