import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Estadisticas Egresados</h1>
        <Formulario/>

      </div>
    );
  }
}

export default App;
