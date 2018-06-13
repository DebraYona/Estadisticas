import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import './index.css';
import ReactTable from "react-table";
import ReactStory from 'react-story'
import 'react-table/react-table.css'
import Formulario from "./Formulario"
import {prueba,columns } from "../Data/data2.json"
import axios from 'axios';

class Tablas extends Component{
  constructor(){
    super()

    this.state={
      datos:[]

    }
    this.mapDatos=this.mapDatos.bind(this);

  }
  
  
  componentWillMount(){
    
    axios.get('../Data/data2.json')
    .then(response=>{
     
      this.setState({datos: response.data.prueba})
    })
    .catch(error =>{
      console.log(error);
    })

}
mapDatos = mapitaDatos =>{
  let data= []

  if(mapitaDatos) {
      data = mapitaDatos.map(n=> {
          let datax ={}
          datax['codigo']=n.codigo
          datax['nombre']=n.nombre
          datax['sede']=n.sede.nombre
          datax['facultad']=n.facultad
          datax['escuela']=n.escuela.nombre
          datax['correo']=n.codigo
          datax['telefono']=n.telefono
          datax['direccion']=n.direccion
          datax['gradotitulo']=n.gradotitulo


          return datax
      })
  }
    return data
  
}

  
  render(){

    


      const data2 =this.mapDatos(this.state.datos)
      console.log(data2)
      const columns2=columns





    return(
      <div>
      

        <ReactTable  className="tabla" responsive columns={columns2}
         data ={data2}
         
         />


      </div>
    )
  }
}

export default Tablas;
