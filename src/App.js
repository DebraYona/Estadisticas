import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <SideBar/>

      </div>
    );
  }
}

export default App;
