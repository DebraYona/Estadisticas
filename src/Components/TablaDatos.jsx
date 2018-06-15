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
  constructor(props){
    super(props)

    this.state={
      datos:[],
      selectedOption:props.data

    }
    this.mapDatos=this.mapDatos.bind(this);
    this.filterByNombre=this.filterByNombre.bind(this);
    this.filterByEscuela= this.filterByEscuela.bind(this);
  }

  componentWillMount(){

    axios.get('http://35.185.243.106:3389/alumnos/')
    .then(response=>{

      this.setState({datos: response.data})

    })
    .catch(error =>{
      console.log(error);
    })

}

  /*filtros*/
  filterByNombre =(lista) =>{
      if(this.state.selectedOption.nombre.length>0){
      let n=this.state.selectedOption.nombre.split(' ')
      console.log(n);
          return lista.reduce((pv,cv)=>{

              if(n.reduce((p,c )=> p || cv.nombres.search(c)!==-1, false)){
                  console.log("entra")
                  pv.push(cv)}
              return pv
          }, [])}
      else
          return lista
  }

  filterByEscuela =(lista) =>{
      if(this.state.selectedOption.escuela.length>0)
          return lista.reduce((pv,cv)=>{
              if(this.state.selectedOption.escuela.split(',').find(e=> e == (cv.escuela.id)))
                  pv.push(cv)
              return pv
          }, [])
      else
          return lista
  }



mapDatos = mapitaDatos =>{
  let dataz = this.filterByNombre(mapitaDatos)
  let data= []
  console.log(dataz);
  if(dataz) {
      data = dataz.map(n=> {
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
    console.log(this.state.selectedOption);
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
