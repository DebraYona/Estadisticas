import React, { Component } from 'react';
import Header from './Header'
import {Col, Row, Label,Button, Form, FormGroup, ListGroup, FormControl, Grid} from 'react-bootstrap';
import '../Css/Sidebar.css'
import Formulario from './Formulario'
import EstadisticaFacultad from './EstadisticaFacultad'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBar extends Component{
  constructor(props){
    super(props)
  }

  deslizar=()=>{
    console.log("click");
    document.getElementById('sidebar').classList.toggle('active')
  }


  render(){
    const routes = [
      {
        path:"/",
        exact: true,
        main:()=><Formulario/>
      },
      {
        path:"/Estadisticas_facultad",
        exact: true,
        main:()=><EstadisticaFacultad/>
      },
    ]
    return(
      <Router>
      <div>
      <div id= "sidebar" className = "active">
        <div className = "toggle-btn">
          <span onClick={this.deslizar} className="glyphicon glyphicon-th" >B</span>
        </div>
        <ul>
          <li> <Link to="/">Estadistica General</Link></li>
          <li><Link to="/Estadisticas_facultad">Estadistica por Facultad</Link> </li>
          <li>Estadisticas por Fecha</li>

        </ul>
      </div>
      <div className="cuerpo">
       {routes.map((route, index) => (
         // Render more <Route>s with the same paths as
         // above, but different components this time.
         <Route
           key={index}
           path={route.path}
           exact={route.exact}
           component={route.main}
         />
       ))}
     </div>
     </div>
      </Router>
    )
  }
}

export default SideBar
