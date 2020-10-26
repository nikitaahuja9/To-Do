import React, { Component } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ToDoList from './components/ToDo.component';
import Create from './components/Create.component';
import List from './components/List.component';

import "bootstrap/dist/css/bootstrap.min.css";
import style from './App.css';

export default class App extends Component {

    render() {

        return (
            <Router>
                <div className='my-container'>
                    <Route path="/" exact component={ToDoList} />
                    <Route path="/list" component={List} />
                    <Route path="/create" component={Create} />
                </div>
            </Router>
        )
    }

}