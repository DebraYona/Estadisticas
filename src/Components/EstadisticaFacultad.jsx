import React, { Component } from 'react';
import Header from './Header'
import {Col, Row, Label,Button, Form, FormGroup, ListGroup, FormControl, Grid} from 'react-bootstrap';
import Select from 'react-select';
import Rellenar from './Rellenar';
import axios from 'axios';




class EstadisticaFacultad extends Component{
  constructor(props){
    super(props)

    this.state={
       grados :[
        {name:"Bachiller", resultado:'10'},
        {name:"Segunda Especialidad", resultado:'15'},
        {name:"Titulo", resultado:'10'},
        {name:"Maestria", resultado:'8'},
        {name:"Doctor", resultado:'10'},
      ],
      grados2:[],
      facultades:"",
      selectedOption: {
        sexo:"",
        sede:"",
        facultad:"",
        escuela:"",
        inicio:"" ,
        fin:"",
        grado_titulo:null,
      },


    }

    this.handleChange= this.handleChange.bind(this)
    this.fetchDataGrados=this.fetchDataGrados.bind(this)
  }

  handleChange = (values,n) => {
    console.log(this.state.selectedOption[n])
   this.setState(prevState=>{
     let selectedOption = prevState.selectedOption;
     selectedOption[n]=values;
     return {selectedOption:selectedOption}
   })
  }
  fetchDataGrados(){
    axios.get('http://35.185.243.106/alumnos/')
  .then(response=>{
    this.setState({grados2: response.data})
    console.log(response.data);

  })
  .catch(error =>{
    console.log(error);
  })
  }
  componentWillMount(){
      this.fetchDataGrados()
    }

    filterByinicio =(lista) =>{
        if(this.state.selectedOption.inicio.length>0){
          let n=this.state.selectedOption.inicio
          console.log(n);
            return lista.reduce((pv,cv)=>{
                if(n <= (cv.estudios[0].fecha_diploma)){
                  console.log(cv.estudios[0].fecha_diploma)
                  pv.push(cv)}
                  return pv


            }, [])}
        else
            return lista
    }

    filterByfinal=(lista) =>{

         if(this.state.selectedOption.fin.length>0){
          let n=this.state.selectedOption.fin

            return lista.reduce((pv,cv)=>{
                if(n >= (cv.estudios[0].fecha_diploma)){
                  console.log(cv.estudios[0].fecha_diploma)
                  pv.push(cv)}
                  return pv


            }, [])}
        else
            return lista

    }
    filterByGrado =(lista,n) =>{

        if(n){
          let nu=n
            console.log(nu);
            return lista.reduce((pv,cv)=>{
              console.log(cv.estudios[0].gradotitulo.id);
                if(nu == (cv.estudios[0].gradotitulo.id)){
                  pv.push(cv)}
                  return pv


            }, [])}
        else
            return lista
    }
    filtroFacus =(lista)=>{

    return  lista.reduce((pv,cv)=>{
        let f =cv.facultad

        if(!pv.find(e => e.facultad ==(cv.facultad))){
          console.log(pv);
          pv.push(cv)
        }



        return pv
      },[])

    }


    mapEstadistica =mapitaEstadistica =>{
      let dataz= this.filterByinicio(this.filterByfinal(mapitaEstadistica))
      let data =[]
      console.log(dataz);
      if(dataz) {
        let bachi= this.filterByGrado(dataz,1)
        let titulo=this.filterByGrado(dataz,2)
        let segunda=this.filterByGrado(dataz,3)
        let maestro =this.filterByGrado(dataz,4)
        let doctor=this.filterByGrado(dataz,5)
        console.log(bachi);
        data = dataz.map(n=> {
          let datax ={}

            datax['facultad']=n.estudios[0].carrera.facultad.nombre_corto
            datax['gradotitulo']=n.estudios[0].gradotitulo.id
            datax['bachiller']=bachi.length
            datax['titulo']=titulo.length
            datax['segunda']=segunda.length
            datax['maestro']=maestro.length
            datax['doctor']=doctor.length
          return datax
      })

      }
      let titi = this.filtroFacus(data)

      data =titi
        console.log(data);
      return data

    }





  render(){

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    console.log(this.state.selectedOption);

    const filtro= this.mapEstadistica(this.state.grados2)
    console.log(filtro);

    return(
      <div>

        <h1> Estadistica por Facultad</h1>
        {console.log("hola")}

        <div>
        </div>
        <Form  >
            <Row >

              <FormGroup className="col-4 .col-md-4  " >

                 <span className="ml-2" >Desde</span>
                  <Col className="">< FormControl name ="inicio" type="date" className="form-control" value={selectedOption.inicio}   onChange={(values)=>this.handleChange(values.target.value,"inicio")} /></Col>
              </FormGroup>
              <FormGroup className="col-4 .col-md-4" >

                   <span className="ml-2" >Hasta</span>
                       <Col ><input name ="hasta" type="date" className="form-control"   value={selectedOption.fin} onChange={(values)=>this.handleChange(values.target.value,"fin")}/></Col>
              </FormGroup>
              <FormGroup className="col-4 .col-md-4">
               <span className="tilulo"  >Facultad</span>

               <Select
                              name="Facultad"
                              value={selectedOption.facultad}
                              onChange={(values)=>this.handleChange(values,"facultad")}
                              placeholder="Seleccionar Facultad"



                           />
                </FormGroup>



            </Row >
          </Form>
        <div>
          <div className="titulo">
              <span className="tilulo" >nombre facultad</span>
          </div>
          <div className="col-md-8">
              <div className="row">
            { filtro.map(n=> {
              <Rellenar grado={n}/>
              console.log(n);
            })}
            {console.log("hOLA")}

            </div>

          </div>



        </div>

      </div>
    )



  }

}

export default EstadisticaFacultad
