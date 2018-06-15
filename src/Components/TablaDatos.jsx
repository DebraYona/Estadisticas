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
    
    axios.get('http://172.16.2.107:8000/alumnos/')
    .then(response=>{
     
      this.setState({datos: response.data})
      
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
          datax['nombre']=n.nombres
          datax['sede']=n.estudios[0].carrera.sede.nombre
          datax['facultad']=n.estudios[0].carrera.facultad.nombre_corto
          datax['escuela']=n.estudios[0].carrera.escuela.nombre_corto
          datax['correo']=n.mail
          datax['telefono']=n.n_telefono
          datax['direccion']=n.direccion
          datax['gradotitulo']=n.estudios[0].gradotitulo.nombre

          
          return datax
      })
  }
    return data
  
}

  
  render(){

    


      const data2 =this.mapDatos(this.state.datos)
      
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
