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

class Rellenar extends React.Component {
  
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

export default Rellenar
