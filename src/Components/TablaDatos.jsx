import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import './index.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'


class Tablas extends Component{
  render(){
    const columns=[
      {
          Header: "Codigo ",
          accessor: "first_name"
      },
      {
          Header: "Nombre",
          accessor: "last_name",
          foldable: true,
      },
      {
          Header: "Apellido Paterno",
          accessor: "apepater",
          foldable: true,
      },
      {
          Header: "Apellido Materno",
          accessor: "apemater",
          foldable: true,
      },

      {
          Header: "Sede",
          accessor: "sede",
          foldable: true,
      },
      {
          Header: "Facultad",
          accessor: "facultad",
          foldable: true,
      },
      {
          Header: "Escuela",
          accessor: "escuela",
          foldable: true,
      },
      {
          Header: "Correo",
          accessor: "correo",
          foldable: true,
      },
      {
          Header: "Telefono",
          accessor: "telefono",
          foldable: true,
      },
      {
          Header: "Direccion",
          accessor: "direccion",
          foldable: true,
      }]
      const data = [{

      }]

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



        <ReactTable   columns={columns}>



            </ReactTable>
      </div>
    )
  }
}

export default Tablas;
