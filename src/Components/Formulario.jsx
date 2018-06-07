import React, { Component } from 'react';
import Tablas from './TablaDatos';
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import './index.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
class Formulario extends Component{
    constructor(){
        super();

        this.state = {
            selectedOption: [],
            data:[],
            nombre:[
              {"id_nombre":1, "nombre":"debra"},
              {"id_nombre":2, "nombre":"juan"},
              {"id_nombre":3, "nombre":"lucas"},
              {"id_nombre":4, "nombre":"julio"},
            ],

            sede:"",
            facultad:"",
            escuela:"",
            sexo:"",
            desde:"",
            hasta:"",
            estado: false,
            operacion:'',
            isLoading:false,
            sede2:[
              {
                "id_sede":1,
                "nombre_sede": "callao",
                "facultad":["1","2"],
                "escuela":[

                ]
              },

              {
                "id_sede":2,
                "nombre_sede": "caniete",
                "facultad":[
                    {
                      "id_facultad":1
                    },
                    {
                      "id_facultad":3
                    }

                ],
                "escuela":[
                  {
                    "id_escuela":1
                  },
                  {
                    "id_escuela":2
                  },
                  {
                    "id_escuela":3
                  },
                  {
                    "id_escuela":4
                  }
                ]
              }

            ],

            "facultad":[
              {
                "id_facultad":1,
                "nombre_facultad": "FIS",
                "sede":[
                    {
                      "id_sede":1
                    },
                    {
                      "id_sede":2
                    }

                ],
                "escuela":[
                  {
                    "id_escuela":1
                  },
                  {
                    "id_escuela":2
                  }
                ]
              },
              {
                "id_facultad":2,
                "nombre_facultad": "FIARN",
                "sede":[
                    {
                      "id_sede":1
                    }

                ],
                "escuela":[
                  {
                    "id_escuela":3
                  }
                ]
                },
              {
                "id_facultad":3,
                "nombre_facultad": "FIME",
                "sede":[
                    {
                      "id_sede":1
                    },
                    {
                      "id_sede":2
                    }

                ],
                "escuela":[
                  {
                    "id_escuela":4
                  }
                ]
              }

            ],

            filtro:[]

        };

        this.handleInput = this.handleInput.bind(this)
        this.filtrar = this.filtrar.bind(this)
        this.filtrar2 = this.filtrar2.bind(this)

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
      console.log(e.target.name);


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
    handleChange = (selectedOption) => {

    this.setState({ selectedOption });
    console.log(selectedOption);

    }




  render(){
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    const option=this.state.nombre
    return(
        <div className="container">
            <div className="formulario" >
                <div className="container ">
                    <Form inline>
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend ">
                                <span className="input-group-text" id="basic-addon1">Nombre o Apellido</span>
                            </div>

                            <Select
                                   name="nombre"
                                    value={selectedOption}
                                    multi
                                    onChange={this.handleChange}
                                    placeholder="Nombre"
                                    removeSelected={true}
                                    rtl={false}
                                    simpleValue
                                   options= {option}
                                   valueKey='id_nombre'
                                   labelKey='nombre'


                                 />

                            <list filtro ></list>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1" >Sexo</span>
                            </div>
                            <FormGroup controlId="formControlsSelect">
                                <Select
                                    multi={true}
                                    type="select"
                                    name="sexo"
                                    componentClass="select"
                                multi    placeholder="Sexo"
                                    onChange={this.handleChange}
                                    options={[
                                      { value: 'femenino', label: 'Femenino' },
                                      { value: 'masculino', label: 'Masculino' },

                                    ]}
                                  >
                                </Select>
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
                        <div>
                        <FormGroup>
                        <Select
                               name="form-field-name"
                                value={selectedOption}
                                multi
                                onChange={this.handleChange}

                                removeSelected={true}
                                rtl={false}
                                simpleValue
                               options={[
                                 { value: 'one', label: 'Onjohkho' },
                                 { value: 'two', label: 'Two' },
                                  { value: 'df', label: 'sd' },
                                   { value: 'twsdfo', label: 'Tasdwo' },
                                    { value: 'dfsf', label: 'rwea' },

                               ]}
                             />

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
