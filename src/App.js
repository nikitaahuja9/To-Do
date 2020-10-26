import React, { Component } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ToDoList from './components/ToDo.component';

import "bootstrap/dist/css/bootstrap.min.css";
import style from './App.css';
import PopUpContent from "./components/PopUpContent.component";

export default class App extends Component {

    render() {

        return (
            <Router>
                <div className='my-container'>
                    <Route path="/" exact component={ToDoList} />
                </div>  
            </Router>
        )
    }

}