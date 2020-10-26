import React, { Component } from "react";

import { ResizableBox } from 'react-resizable';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ToDoList from './components/ToDo.component';
import Create from './components/Create.component';
import Edit from './components/Edit.component';

import "bootstrap/dist/css/bootstrap.min.css";
import style from './App.css';

export default class App extends Component {

    render() {

        return (
            <Router>
                <div className='my-container'>
                    <Route path="/" exact component={ToDoList} />
                    <Route path="/edit" component={Edit} />
                    <Route path="/create" component={Create} />
                </div>
            </Router>
        )
    }

}