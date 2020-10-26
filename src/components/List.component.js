import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PopUp from './PopUp';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Todo = props => (

    <tr>
        <td className={props.todo.completed ? 'completed' : ''}>{props.todo.description}</td>
        <td className={props.todo.completed ? 'completed' : ''}>{props.todo.priority}</td>
        <td>
        <PopUp trigger={<button> Trigger</button>} position="right center">
            <div>Popup</div>
        </PopUp>
        </td>
    </tr>
)

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {

                console.log(response.data)
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {

        return (
            <div>
                <h5 style={{ marginTop: '10px' }}>Task List</h5>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
