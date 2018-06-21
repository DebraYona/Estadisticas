import React, { Component } from 'react';
import Header from './Header'
import {Col, Row, Label,Button, Form, FormGroup, ListGroup, FormControl, Grid} from 'react-bootstrap';


class ProductRow extends React.Component {
  render() {
    const list = this.props.listita
    console.log("row");
    return (
      <tr>
        <td>{list.name}</td>
        <td>{list.resultado}</td>
      </tr>
    );
  }
}

class Llenar extends React.Component {
  render() {
    const rows = [];

    {console.log("hola2")}
    this.props.grado.forEach((lista) => {
      rows.push(
        <ProductRow
          listita={lista}
          key={lista.name}
        />
      );

    });

    return (
      <table>
       <thead>
         <tr>
           <th>Grado</th>
           <th>Total</th>
         </tr>
       </thead>
       <tbody>{rows}</tbody>
     </table>
    );
  }
}





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
        <Header/>
        <h1> Estadistica por Facultad</h1>

        <div>


        </div>
        <Form  >
            <Row >
            <FormGroup className="col-4 .col-md-4">
             <span className="tilulo"  >Facultad</span>

             <Select
                            name="Facultad"
                            value={Facultad}
                            multi={true}
                            onChange={(values)=>this.handleChange(values,"facultad")}
                            placeholder="Seleccionar Facultad"
                            removeSelected={true}
                            rtl={false}
                            simpleValue
                            options= {option2}
                            valueKey=
                            labelKey=

                         />

        </FormGroup>
            </Row >
          </Form>
        <div>
          <div className="titulo">
              <span className="tilulo" >nombre facultad</span>
          </div>
          <div>
            {console.log("hola")}
            <Llenar grado={this.state.grados}/>
          </div>



        </div>

      </div>
    )



  }

}

export default EstadisticaFacultad
