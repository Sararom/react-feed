import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootswatch/dist/minty/bootstrap.min.css"; 


const RouterApp = (<Router>
    <App></App>
</Router>);

ReactDOM.render(RouterApp, document.getElementById('root'));

