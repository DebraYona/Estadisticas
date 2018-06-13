import React, { Component } from 'react';
import Tablas from './TablaDatos';
import {Col, Row, Label,Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import './index.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import axios from 'axios';

class Formulario extends Component{
    constructor(){
        super();

        this.state = {
            selectedOption: {
              nombre:[],
              sexo:" ",
              sede:[],
              facultad:[],
              escuela:[],
              inicio:"" ,
              fin:"",
              grado_titulo:""
            },
            datos :{
              nombre:[],
              sexo:" ",
              sede:[],
              facultad:[],
              escuela:[],
              inicio:"" ,
              fin:"",
              grado_titulo:""
            },
            filtro:[]

        };

        this.handleInput = this.handleInput.bind(this)
        this.filtrar = this.filtrar.bind(this)
        this.filtrar2 = this.filtrar2.bind(this)
        this.fetchData= this.fetchData.bind(this)
        //this.handleSearchKey=this.handleSearchKey.bind((this));
        this.mostrarData=this.mostrarData.bind(this);

    }



    handleSearchClick(){
        //let url = '';
        if(this.state.nombre_apellido === "" && this.state.sexo === ""&& this.state.sede === "" &&
            this.state.dates2 === "" && this.state.dates === "" && this.state.facultad === "") {
            this.setState({
                mensaje: "Casilleros vacios",
                estado: true,
                operacion: 'V',
                lista: [],
                isLoading: false
            });
        }else{
            //parametros a enviar al json
            let jsonString = {
                "nombre": this.state.nombre_apellido,
                "sexo": this.state.sexo,
                "sede": this.state.sede,
                "facultad": this.state.facultad,
                "escuela": this.state.escuela,
                "periodoI": this.state.dates,
                "periodoF": this.state.dates2,
            };
            this.setState({
                isLoading:true,
                mensaje:"",
                operacion:"c"
            });
            console.log(jsonString);
            /*
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonString, null, 2)

            })
                .then((response) => {
                    return response.json()
                })
                .then(responseJson => {
                    this.setState({
                        lista: responseJson.data,
                        estado:true,
                        operacion: (responseJson.data!==null && responseJson.data.length!==0),
                        mensaje:(responseJson.data!==null && responseJson.data.length!==0)?(""):("Datos no encontrados"),
                        isLoading:false
                    });
                    //console.log( responseJson.data.length);
                });
                */
        }
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
      fetchData(){
        axios.get('../../public/Data/data2.json')
        .then(response =>{
           this.setState({
             datos: response.data.nombre
        })
        })
        .catch(error =>{
          console.log(error);
        })
        // this.setState( { data:prueba } )

    }
    componentDidMount(){
      axios.get('../Data/data2.json')
      .then(response=>{
        console.log(response.data.prueba);
        this.setState({filtro: response.data.prueba})
      })
      .catch(error =>{
        console.log(error);
      })

  }



    filtrar(e){
      var value = e.target.value
      var lista = this.state.nombre
      console.log(lista)
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
      var lista = this.state.facultad
      console.log(lista)
      lista=  lista.filter(function(valueq){
       return valueq.nombre_facultad.toLowerCase().search(
        value.toLowerCase()) !== -1

     })

      console.log(lista);

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

      const {value, name} = e.target.selectedOption
      this.setState({
        [name]:value

      })
      console.log(this.state);
      console.log(e.target.name);


    }




  render(){
    console.log(this.state.filtro.nombre);
    console.log(this.state.selectedOption)
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    const option=this.state.filtro.map((dato, i) =>{
      dato.nombre
    })
    const option2=this.state.sede
    const option3=this.state.facultad
    const option4=this.state.escuela


    return(
       <div className="formulario" >
           <div className="contiener" >
            <Form  >
                <Row >
                    <FormGroup  className=" col-sm-8" inline>

                            <span >Nombre o Apellido</span>
                            <Select
                                        name="nombre"
                                        value={selectedOption.nombre}
                                        multi
                                        onChange={(values)=>this.handleChange(values,"nombre")}
                                        placeholder="Nombre"
                                        removeSelected={true}
                                        rtl={false}
                                        simpleValue
                                        options= {option}
                                        valueKey='id_nombre'
                                        labelKey='nombre'
                                        ref={node=>this.node}

                                        />

                    </FormGroup>
                    <FormGroup className=" col-sm-4">
                            <span >Sexo</span>

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
                                            { value: 'femenino', label: 'Femenino' },
                                            { value: 'masculino', label: 'Masculino' },
                                            ]}




                                        />

                    </FormGroup>

               </Row>
               <Row>
                    <FormGroup className="col-4 .col-md-4">
                     <span >Sede</span>

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
                    <span >Facultad</span>

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
                        <span >Escuela</span>

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
                <span  >Periodo</span>
                    <FormGroup className="col-4 .col-md-4 ml-5" >
                    <FormGroup className="col-4 row justify-content-center  " >

                        <span className="ml-2" >Desde</span>
                             <Col className="">< input name ="inicio" type="date" className="form-control" value={selectedOption.inicio}  onChange={(values)=>this.handleChange(values,"inicio")}/></Col>
                    </FormGroup>
                    <FormGroup className="col-4 row justify-content-center" >

                         <span className="ml-2" >Hasta</span>
                             <Col ><input name ="hasta" type="date" className="form-control"   onChange={this.handleInput}/></Col>
                    </FormGroup>
                    </FormGroup>
                    <FormGroup className=" col-sm-4">
                            <span >Grado o Título</span>

                            <Select
                                        name="grado_titulo"
                                        value={selectedOption.grado_titulo}
                                        multi={false}
                                        onChange={(values)=>this.handleChange(values,"grado_titulo")}
                                        placeholder="Seleccionar grado/titulo"
                                        removeSelected={true}
                                        rtl={false}
                                        simpleValue
                                        options={[
                                            { value: 'grado', label: 'Grado' },
                                            { value: 'titulo', label: 'Titulo' },
                                            ]}




                                        />

                    </FormGroup>
                </Row>


              <Row className="right  ">
                  <Button className="btn mr-10 "  id="basic-addon1" type="submit"> Buscar</Button>
              </Row>
            </Form>

           </div>






       </div>
    )
  }
}

export default Formulario;
