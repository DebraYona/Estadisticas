import React, { Component } from 'react';
import Tablas from './TablaDatos';
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import './index.css';
class Formulario extends Component{
    constructor(){
        super();

        this.state = {
            lista:[],
            nombre:"",
            sede:"",
            facultad:"",
            escuela:"",
            sexo:"",
            desde:"",
            hasta:"",
            estado: false,
            operacion:'',
            isLoading:false
        };

        this.handleInput = this.handleInput.bind(this)





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

    handleInput(e) {
      const {value, name} = e.target
      this.setState({
        [name]:value

      })
      console.log(this.state);


    }



  render(){
    return(
        <div className="container">
            <div className="formulario" >
                <div className="container ">
                    <Form inline>
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend ">
                                <span className="input-group-text" id="basic-addon1">Nombre o Apellido</span>
                            </div>
                            <FormControl
                                type="text"
                                name="nombre"
                                onChange={this.handleInput}
                                placeholder="Nombre o Apellido"
                            />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1" >Sexo</span>
                            </div>
                            <FormGroup controlId="formControlsSelect">
                                <FormControl
                                    type="select"
                                    name="sexo"
                                    componentClass="select"
                                    placeholder="Sexo"
                                    onChange={this.handleInput}
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
                                    name="sede"
                                    type = " text "

                                    onChange={this.handleInput}
                                    placeholder = " Sede "
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Facultad</span>
                                </div>
                                < FormControl
                                    name="facultad"
                                    type = " text "

                                    onChange={this.handleInput}
                                    placeholder = " Facultad "
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Escuela</span>
                                </div>

                                < FormControl
                                    name="escuela"
                                    type = " text "
                                    onChange={this.handleInput}
                                    placeholder = " Escuela "
                                />
                            </div>
                    </Form>
                </div>
                  <div className="container">
                    <form inline>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Periodo</span>
                            </div>
                            <FormGroup inline >
                                <input name ="desde" type="date" className="form-control"   onChange={this.handleInput}/>
                                <input name ="hasta" type="date" className="form-control"   onChange={this.handleInput}/>
                            </FormGroup>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <Button  id="basic-addon1"
                        type="submit"
                      //  onClick={this.handleSearchClick}
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
