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
          accessor: "codigo"
      },
      {
          Header: "Nombre",
          accessor: "nombre",
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
        codigo:'15200204',
        nombre:'debra',
        apepater:'chacaliaza',
        apemater:'Llamosa',
        sede: 'Lima',
        facultad:'Fis',
        escuela:'sis',
        correo: 'de.chacaliaza@gmail.com',
        telefono: '789523192',
        direccion: 'por aqui y por alli'
      },
      {
        codigo:'15200300',
        nombre:'lucas',
        apepater:'Llano',
        apemater:'Esta',
        sede: 'Lima',
        facultad:'Fis',
        escuela:'sis',
        correo: 'lu.llano@gmail.com',
        telefono: '789523192',
        direccion: 'por aqui y por alli'
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



        <ReactTable   columns={columns} data ={data}>



            </ReactTable>
      </div>
    )
  }
}

export default Tablas;
