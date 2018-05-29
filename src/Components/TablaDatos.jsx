import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import './index.css';

class Tablas extends Component{
  render(){
    return(
      <div>
        <Table className="tabla" responsive   striped bordered>
          <thead>
            <tr>
              <th>Codigo </th>
              <th>Nombre </th>
              <th>Apellido </th>
              <th>Facultad </th>
              <th>Telefono </th>
              <th>Direccion </th>

            </tr>
          </thead>
          <tbody>
              <tr>
                <td>1</td>
                <td>Datos Prueba</td>
                <td>Datos Prueba</td>
                <td>Datos Prueba</td>
                <td>Datos Prueba</td>
                <td>Datos Prueba</td>
              </tr>
              <tr>
                <td>2</td>
                <td> Prueba 2</td>
                <td> Prueba 2</td>
                <td> Prueba 2</td>
                <td> Prueba 2</td>
                <td> Prueba 2</td>
              </tr>
              <tr>
                <td>3</td>
                <td> Prueba datos</td>
                <td> Prueba datos</td>
                <td> Prueba datos</td>
                <td> Prueba datos</td>
                <td> Prueba datos</td>
                </tr>
    </tbody>
        </Table>
      </div>
    )
  }
}

export default Tablas;
