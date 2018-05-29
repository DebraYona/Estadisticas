import React, { Component } from 'react';
import Tablas from './TablaDatos';
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import './index.css';
class Formulario extends Component{
    constructor(){
        super();

        this.state = {
            lista:null,
            nombre_apellido:"",
            sexo:"",
            sede:"",
            facultad:"",
            dates:"",
            dates2:"",
            escuela:"",
            estado: false,
            operacion:'',
            isLoading:false
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeDate2 = this.handleChangeDate2.bind(this);
        this.handleSearchClick=this.handleSearchClick.bind(this);
        this.handleInputName=this.handleInputName.bind(this);
        this.handleInputSexo=this.handleInputSexo.bind(this);
        this.handleInputSede=this.handleInputSede.bind(this);
        this.handleInputFacultad=this.handleInputFacultad.bind(this);
        this.handleInputEscuela=this.handleInputEscuela.bind(this);
        //this.handleSearchKey=this.handleSearchKey.bind((this));
        this.mostrarData=this.mostrarData.bind(this);
    }
    // leer del input Concepto
    handleInputName(data){
        this.setState({
            nombre_apellido:data.target.value,
            mensaje:""
        });
    }
    handleInputSexo(data){
        this.setState({
            sexo:data.target.value,
            mensaje:""
        });
    }
    handleInputSede(data){
        this.setState({
            sede:data.target.value,
            mensaje:"",
            operacion:"c"
        });
    }
    handleInputFacultad(data){
        this.setState({
            facultad:data.target.value,
            mensaje:"",
            operacion:"c"
        });
    }
    handleInputEscuela(data){
        this.setState({
            escuela:data.target.value,
            mensaje:"",
            operacion:"c"
        });
    }
    handleChangeDate(date){
        this.setState({
            dates: date.target.value,
            mensaje:"",
            operacion:"c"
        });
    }
    handleChangeDate2(date){
        this.setState({
            dates2: date.target.value,
            mensaje:"",
            operacion:"c"
        });
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
  render(){
    return(
        <div className="container">
            <div className="formulario" >
                <div className="container ">
                    <Form inline>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nombre o Apellido</span>
                            </div>
                            <FormControl
                                id="Nombre"
                                type="text"
                                value={this.state.nombre_apellido}
                                onChange={this.handleInputName}
                                placeholder="Nombre o Apellido"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Sexo</span>
                            </div>
                            <FormGroup controlId="formControlsSelect">
                                <FormControl
                                    type="select"
                                    componentClass="select"
                                    value={this.state.sexo}
                                    onChange={this.handleInputSexo}
                                    placeholder="Sexo"
                                >
                                    <option value="">Sexo</option>
                                    <option value="femenino"> Femenino </option>
                                    <option value="masculino"> Masculino </option>
                                </FormControl>
                            </FormGroup>
                        </div>
                    </Form>
                </div>
                <div className="container">
                    <Form inline>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Sede</span>
                                </div>
                                < FormControl
                                    id="Sede"
                                    type = " text "
                                    value={this.state.sede}
                                    onChange={this.handleInputSede}
                                    placeholder = " Sede "
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Facultad</span>
                                </div>
                                < FormControl
                                    id="Facultad"
                                    type = " text "
                                    value={this.state.facultad}
                                    onChange={this.handleInputFacultad}
                                    placeholder = " Facultad "
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Escuela</span>
                                </div>
                                < FormControl
                                    id="Escuela"
                                    type = " text "
                                    value={this.state.escuela}
                                    onChange={this.handleInputEscuela}
                                    placeholder = " Escuela "
                                />
                            </div>
                    </Form>
                </div>
                <div className="container">
                    <Form inline>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Periodo</span>
                            </div>
                            <FormGroup inline >
                                <input type="date" className="form-control"  onChange={this.handleChangeDate}/>
                                <input type="date" className="form-control"  onChange={this.handleChangeDate2}/>
                            </FormGroup>
                        </div>
                    </Form>
                </div>
                <div className="container">
                    <Button
                        type="submit"
                        onClick={this.handleSearchClick}
                    >Buscar</Button>
                </div>
            </div>
            <div className={(this.state.isLoading)?("isLoading"):("listar")}>
                {this.mostrarData()}
            </div>
        </div>
    )
  }
}

export default Formulario;
