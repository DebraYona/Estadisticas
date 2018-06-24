import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import EstadisticaFacultad from './Components/EstadisticaFacultad'
import SideBar from './Components/SideBar'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//ReactDOM.render(<EstadisticaFacultad />, document.getElementById('root'));
//registerServiceWorker();
//ReactDOM.render(<SideBar />, document.getElementById('root'));
//registerServiceWorker();
