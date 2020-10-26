import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props)

        this.changeDescription = this.changeDescription.bind(this)
        this.changePriority = this.changePriority.bind(this)
        this.changeCompleted = this.changeCompleted.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            description: '',
            priority: '',
            completed: false
        }
    }

    changeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    changePriority = (e) => {
        this.setState({ priority: e.target.value })
    }

    changeCompleted = (e) => {
        this.setState({ completed: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const task = {
            description: this.state.description,
            priority: this.state.priority,
            completed: this.state.completed
        }

        axios.post('http://localhost:4000/todos/add', task)
            .then(res => console.log(res.data));

        this.setState({ description: '', priority: '', completed: false })
    }

    render() {
        return (
            <div>
                <h5 style={{ marginTop: '5px' }}>Create A Task</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <h6 style={{ marginLeft: '5px' }}>Description:</h6>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.changeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <h6 style={{ marginLeft: '5px' }}>Priority:</h6>
                        <div className="form-check form-check-inline">

                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.changePriority}
                            />
                            <label className="form-check-label">  Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.changePriority}
                            />
                            <label className="form-check-label">  Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.priority === 'High'}
                                onChange={this.changePriority}
                            />
                            <label className="form-check-label">  High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add to Planner" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}