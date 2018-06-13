import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import './index.css';
import ReactTable from "react-table";
import ReactStory from 'react-story'
import 'react-table/react-table.css'
import Formulario from "./Formulario"
import {prueba,columns } from "../Data/data2.json"

class Tablas extends Component{
  render(){

      const data2=prueba
      const columns2=columns





    return(
      <div>
      

        <ReactTable  className="tabla" responsive columns={columns2} data ={data2}/>


      </div>
    )
  }
}

export default Tablas;
