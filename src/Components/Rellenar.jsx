import React, { Component } from 'react';
import Header from './Header'
import {Col, Row, Label,Button, Form, FormGroup, ListGroup, FormControl, Grid} from 'react-bootstrap';




class ProductRow extends React.Component {
  render() {

    console.log("row");
    return (
      <tr>
        <td>{this.props.clave}</td>
        <td>{this.props.valor}</td>
      </tr>
    );
  }
}

class Rellenar extends React.Component {

  render() {
    const rows = [];
    let keys = [];
    let value = [];
    keys =Object.keys(this.props.grado)
    value =Object.values(this.props.grado)

    console.log("Hola2");
    console.log(keys);
    console.log(value);

    value.map((n,i)=> {
      rows.push(
        <ProductRow
          valor={n}
          clave={keys[i]}
        />
      );
    })

    return (
      <div className="col-md-4" >
           <div className="card mt-4">
           <div className="card-header">
           <div className="card-title text-center">
            <h3>{value[0]}</h3>
           </div>
           </div>
             <div className="card-body">
                 <table>
                  <thead>
                    <tr>
                      <th>Grado</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
             </div>
         </div>
      </div>


    );
  }
}

export default Rellenar
