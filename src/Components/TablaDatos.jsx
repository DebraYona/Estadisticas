import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import './index.css';
import ReactTable from "react-table";
import ReactStory from 'react-story'
import 'react-table/react-table.css'
import Formulario from "./Formulario"


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
      },
      {
        codigo:'15200300',
        nombre:null,
        apepater:'',
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


        <ReactTable  className="tabla" responsive columns={columns} data ={data}/>


      </div>
    )
  }
}

export default Tablas;
