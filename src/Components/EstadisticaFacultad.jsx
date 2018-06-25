import React, { Component } from 'react';
import Header from './Header'
import {Col, Row, Label,Button, Form, FormGroup, ListGroup, FormControl, Grid} from 'react-bootstrap';
import Select from 'react-select';
import Rellenar from './Rellenar';



class EstadisticaFacultad extends Component{
  constructor(props){
    super(props)

    this.state={
       grados :[
        {name:"Bachiller", resultado:'10'},
        {name:"Segunda Especialidad", resultado:'15'},
        {name:"Titulo", resultado:'10'},
        {name:"Maestria", resultado:'8'},
        {name:"Doctor", resultado:'10'},
      ],
      facultades:""


    }

    this.handleChange= this.handleChange.bind(this)
  }

  handleChange = (values,n) => {
    console.log(this.state.selectedOption[n])
   this.setState(prevState=>{
     let selectedOption = prevState.selectedOption;
     selectedOption[n]=values;
     return {selectedOption:selectedOption}
   })
  }

  render(){



    return(
      <div>

        <h1> Estadistica por Facultad</h1>
        {console.log("hola")}

        <div>
        </div>
        <Form  >
            <Row >
            <FormGroup className="col-4 .col-md-4">
             <span className="tilulo"  >Facultad</span>

             <Select
                            name="Facultad"
                            onChange={(values)=>this.handleChange(values,"facultad")}
                            placeholder="Seleccionar Facultad"


                         />

        </FormGroup>
            </Row >
          </Form>
        <div>
          <div className="titulo">
              <span className="tilulo" >nombre facultad</span>
          </div>
          <div className="col-md-8">
              <div className="row">
            {console.log("hola")}
            <Rellenar grado={this.state.grados}/>
            </div>
            
          </div>



        </div>

      </div>
    )



  }

}

export default EstadisticaFacultad
