import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario'
import Header from './Components/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <Formulario/>

      </div>
    );
  }
}

export default App;
