import React, { Component } from 'react';
import Tablas from './TablaDatos';
import {Col, Row, Label,Button, Form, FormGroup, ListGroup, FormControl, Grid} from 'react-bootstrap';
import './index.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import axios from 'axios';

class Formulario extends Component{
    constructor(){
        super();

        this.state = {
            selectedOption: {
              nombre:"",
              sexo:"",
              sede:"",
              facultad:"",
              escuela:"",
              inicio:"" ,
              fin:"",
              grado_titulo:null,
            },
            carrer :[],
            grado :[],
            filtro:[]

        };

        this.handleInput = this.handleInput.bind(this)
        this.filtrar = this.filtrar.bind(this)
        this.filtrar2 = this.filtrar2.bind(this)
        this.fetchDataCarrera= this.fetchDataCarrera.bind(this)
        this.fetchDataGrado= this.fetchDataGrado.bind(this)

        //this.handleSearchKey=this.handleSearchKey.bind((this));
        this.mostrarData=this.mostrarData.bind(this);
        this.mapNombre=this.mapNombre.bind(this);
        this.mapFacultad=this.mapFacultad.bind(this);
        this.mapSede=this.mapSede.bind(this);
        this.mapEscuela=this.mapEscuela.bind(this);

        this.filtrarNombre=this.filtrarNombre.bind(this);
        this.obtenerFacultad=this.obtenerFacultad.bind(this);
        this.obtenerEscuela=this.obtenerEscuela.bind(this);
        this.obtenerSede=this.obtenerSede.bind(this);
        this.obtenerGrado=this.obtenerGrado.bind(this);
        this.filterByEscuela=this.filterByEscuela.bind(this);
        this.filterBySede=this.filterBySede.bind(this);

        this.pedirExcel=this.pedirExcel.bind(this);




    }



    mostrarData(){
        let contenedor="";
        if(this.state.estado){
            // console.log(this.state.lista);
            switch (this.state.operacion){
                case "V": contenedor=(<div className="alert alert-info">{this.state.mensaje}</div>);break;
                case true: contenedor=(<div><Tablas listado={this.state.lista}/></div>);break;
                case false: contenedor=(<div className="alert alert-info">{this.state.mensaje}</div>);break;
                default: contenedor=(<div></div>);
            }
        }
        return contenedor;

      }
      fetchDataCarrera(){
        axios.get('http://35.185.243.106/carreras/')
      .then(response=>{
        this.setState({carrera: response.data})
        console.log(response.data);

      })
      .catch(error =>{
        console.log(error);
      })
    }
    fetchDataGrado(){
        axios.get('http://35.185.243.106/grados/')
      .then(response=>{
          console.log(response.data);
        this.setState({grado: response.data})


      })
      .catch(error =>{
        console.log(error);
      })
    }


    componentWillMount(){
        this.fetchDataCarrera()
        this.fetchDataGrado()

      axios.get('../Data/data.json')
      .then(response=>{
        this.setState({filtro: response.data})
      })
      .catch(error =>{
        console.log(error);
      })


  }

    pedirExcel=()=>{
        let n =this.state.selectedOption
        axios({
            url:'http://35.185.243.106/excel/',
            method:'POST',
            responseType:'blob',
            data:n
        })
        .then(response=>{
            const url=window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href=url
            link.setAttribute('download','registro.xlsx')
            link.click()
            window.URL.revokeObjectURL(url)
        })
    }



    filtrar(e){
      var value = e.target.value
      var lista = this.state.filtro

      lista=  lista.filter(function(valueq){
       return valueq.toLowerCase().search(
        value.toLowerCase())  !== -1
       //valueq.tolowerCase().search( value.tolowerCase()) !== -1;
     })
      this.setState({filtro: lista})

        //.tolowerCase().search(  value.tolowerCase()) !== -1;}

    // console.log(e.target.value);

    }

    handleSubmit(e){
      e.preventDefault()

    }



    filtrar2(e){
      var value = e.target.value
      var lista = this.state.filtro

      lista=  lista.filter(function(valueq){
       return valueq.nombre.toLowerCase().search(
        value.toLowerCase()) !== -1

     })


    }

    filtrarNombre(e){


        var value = e.target.value
        var lista = this.state.
        lista=  lista.filter(function(valueq){
         return valueq.nombre.search(
          value.toLowerCase()) !== -1

       })



      }

    handleChange = (values,n) => {
      console.log(this.state.selectedOption[n])
     this.setState(prevState=>{
       let selectedOption = prevState.selectedOption;
       selectedOption[n]=values;
       return {selectedOption:selectedOption}
     })
    }



    handleInput(e) {

     const [name, value] =e.target
      this.setState({
        [name]:value


      })
    }
      filtrar3(e){
        var value = e.target.value
        var lista = this.state.filtro
        console.log(lista)
        lista=  lista.filter(function(valueq){
         return valueq.nombre.toLowerCase().search(
          value.toLowerCase()) !== -1

       })


    }

    /*filtros*/
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


        filterBySede =(lista) =>{
            if(this.state.selectedOption.sede.length>0)
            return lista.reduce((pv,cv)=>{
                if(this.state.selectedOption.sede.split(',').find(e=> e == (cv.sede.id)))
                    pv.push(cv)
                return pv
            }, [])
            else
            return lista

        }

        filterByFacultad =(lista) =>{
            if(this.state.selectedOption.facultad.length>0)
            return lista.reduce((pv,cv)=>{
                if(this.state.selectedOption.facultad.split(',').find(e=> e == (cv.facultad.id)))
                    pv.push(cv)
                return pv
            }, [])
            else
            return lista

        }




    /* obtener*/

    obtenerFacultad = FacultadTotal =>{
        let facultad= []

        if(FacultadTotal) {
            facultad = FacultadTotal.reduce((pv,cv,i,mapi)=>{

                if (!pv.find(elementoActual=>elementoActual.id === cv.facultad.id)  )
                    pv.push(cv.facultad)
                return pv
            }, [] )

        }

        return facultad

    }
    obtenerSede = mapitaSede =>{
        let sede= []

        if(mapitaSede) {
            sede = mapitaSede.reduce((pv,cv,i,mapi)=>{

                if (!pv.find(elementoActual=>elementoActual.id === cv.sede.id))
                    pv.push(cv.sede)
                return pv
            }, [] )

        }

        return sede

    }
    obtenerEscuela = mapitaEscuela =>{
        let escuela= []

        if(mapitaEscuela) {
            escuela = mapitaEscuela.reduce((pv,cv,i,mapi)=>{

                if (!pv.find(elementoActual=>elementoActual.id === cv.escuela.id))
                    pv.push(cv.escuela)
                return pv
            }, [] )

        }

        return escuela

    }
    obtenerGrado = mapitaGrado =>{
        let grado= []

        if(mapitaGrado) {
            grado = mapitaGrado.reduce((pv,cv,i,mapi)=>{

                if (!pv.find(elementoActual=>elementoActual.id === cv.id))
                    pv.push(cv.grado)
                return pv
            }, [] )

        }

        return grado

    }



    /*map */
    mapNombre = mapitaNombre => {
        let nombres = []


        if (mapitaNombre) {
            nombres = mapitaNombre.map(n=>{
                let nombrex = {}
                nombrex['id'] = n.id_nombre
                nombrex['nom'] = n.nombre
                return nombrex
            })
        }

        return nombres
    }




    mapFacultad = mapitaFacultad =>{
        let facultadx=this.obtenerFacultad(this.filterBySede(this.filterByEscuela(mapitaFacultad)))

        let facultad=[]
        if(facultadx) {
            facultad = facultadx.map(n=> {
                let facul ={}
                facul['id_facultad']=n.id
                facul['nombre_facultad']=n.nombre_corto
                return facul

            })
        }

        return facultad

    }



    mapSede = mapitaSede =>{
        let sedex=this.obtenerSede(this.filterByFacultad(this.filterByEscuela(mapitaSede)))
        let sede= []

        if(sedex) {
            sede = sedex.map(n=> {
                let sedes ={}
                sedes['id_sede']=n.id
                sedes['nombre_sede']=n.nombre
                return sedes
            })
        }

        return sede

    }
    mapEscuela = mapitaEscuela =>{
        let escuelax =this.obtenerEscuela(this.filterBySede(this.filterByFacultad(mapitaEscuela)))
        let escuela= []

        if(escuelax) {
            escuela = escuelax.map(n=> {
                let escuelas ={}
                escuelas['id_escuela']=n.id
                escuelas['nombre_escuela']=n.nombre
                return escuelas
            })
        }

        return escuela

    }
    mapGrado = mapitaGrado =>{
        let gradox =mapitaGrado
        let grado= []

        if(gradox) {
            grado = gradox.map(n=> {
                let grados ={}
                grados['id_grado']=n.id
                grados['nombre_grado']=n.nombre
                return grados
            })
        }

        return grado

    }


  render(){
    console.log(this.state.grado)
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    const option=this.mapNombre(this.state.filtro.nombre)
    const option2=this.mapSede(this.state.carrera)
    const option3=this.mapFacultad(this.state.carrera)
    const option4=this.mapEscuela(this.state.carrera)
    const option5=this.mapGrado(this.state.grado)

    return(
       <div>
       <div className="formulario" >
           <div className="contiener" >
            <Form  >
                <Row >
                    <FormGroup  className=" col-sm-8" inline>

                            <span className="tilulo" >Nombre o Apellido</span>
                            <FormControl
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                                onChange={(values)=>this.handleChange(values.target.value,"nombre")}
                                option={[option]}

                                        />
                            <ListGroup/>


                    </FormGroup>
                    <FormGroup className=" col-sm-4">
                            <span className="tilulo" >Sexo</span>

                            <Select
                                        name="sexo"
                                        value={selectedOption.sexo}
                                        multi={false}
                                        onChange={(values)=>this.handleChange(values,"sexo")}
                                        placeholder="Seleccionar Sexo"
                                        removeSelected={true}
                                        rtl={false}
                                        simpleValue
                                        options={[
                                            { value: 'F', label: 'Femenino' },
                                            { value: 'M', label: 'Masculino' },
                                            ]}




                                        />

                    </FormGroup>

               </Row>
               <Row>
                    <FormGroup className="col-4 .col-md-4">
                     <span className="tilulo"  >Sede</span>

                     <Select
                                    name="sede"
                                    value={selectedOption.sede}
                                    multi={true}
                                    onChange={(values)=>this.handleChange(values,"sede")}
                                    placeholder="Seleccionar Sede"
                                    removeSelected={true}
                                    rtl={false}
                                    simpleValue
                                    options= {option2}
                                    valueKey='id_sede'
                                    labelKey='nombre_sede'

                                 />

                </FormGroup>
                <FormGroup className="col-4 .col-md-4">
                    <span className="tilulo" >Facultad</span>

                        <Select
                                    name="facultad"
                                    value={selectedOption.facultad}
                                    multi={true}
                                    onChange={(values)=>this.handleChange(values,"facultad")}
                                    placeholder="Seleccionar Facultad"
                                    removeSelected={true}
                                    rtl={false}
                                    simpleValue
                                    options= {option3}
                                    valueKey='id_facultad'
                                    labelKey='nombre_facultad'

                                    />

                    </FormGroup>
                    <FormGroup className="col-4 .col-md-4">
                        <span className="tilulo"  >Escuela</span>

                        <Select
                                    name="escuela"
                                    value={selectedOption.escuela}
                                    multi={true}
                                    onChange={(values)=>this.handleChange(values,"escuela")}
                                    placeholder="Seleccionar Escuela"
                                    removeSelected={true}
                                    col-8           rtl={false}
                                    simpleValue
                                    options= {option4}
                                    valueKey='id_escuela'
                                    labelKey='nombre_escuela'

                                    />

                    </FormGroup>
               </Row>
                <Row>
                <span className="tilulo" >Periodo</span>
                    <FormGroup className="col-4 .col-md-4 ml-5" >
                    <FormGroup className="col-4 row justify-content-center  " >

                        <span className="ml-2" >Desde</span>
                             <Col className="">< FormControl name ="inicio" type="date" className="form-control" value={selectedOption.inicio}   onChange={(values)=>this.handleChange(values.target.value,"inicio")}/></Col>
                    </FormGroup>
                    <FormGroup className="col-4 row justify-content-center" >

                         <span className="ml-2" >Hasta</span>
                             <Col ><input name ="hasta" type="date" className="form-control" value={selectedOption.fin}  onChange={(values)=>this.handleChange(values.target.value,"fin")}/></Col>
                    </FormGroup>
                    </FormGroup>


                    <FormGroup className=" col-sm-4">
                            <span className="tilulo" >Grado o Título</span>

                            <Select
                                        name="grado_titulo"
                                        value={selectedOption.grado_titulo}
                                        multi={false}
                                        onChange={(values)=>this.handleChange(values,"grado_titulo")}
                                        placeholder="Seleccionar grado/titulo"
                                        removeSelected={true}
                                        rtl={false}
                                        simpleValue
                                        options={option5}
                                        valueKey='id_grado'
                                        labelKey='nombre_grado'



                                        />

                    </FormGroup>
                </Row>

                <Grid>

               <Row className="show-grid">
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xsHidden md={4}>
                    <Button className=""  id="basic-addon1" type="button"  onClick={this.pedirExcel} > Imprimir</Button>
                    </Col>
                </Row>





                </Grid>


            </Form>

           </div>






       </div>
             <Tablas data={this.state.selectedOption} />
      </div>
    )
  }
}

export default Formulario;
