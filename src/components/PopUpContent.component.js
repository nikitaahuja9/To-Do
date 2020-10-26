import React from 'react';  

import axios from 'axios';
import '../styles/Popup.css';  
import "bootstrap/dist/css/bootstrap.min.css";

export default class PopUpContent extends React.Component {  

  constructor(props) {
    super(props);

    this.changeDescription = this.changeDescription.bind(this);
    this.changePriority = this.changePriority.bind(this);
    this.changeCompleted = this.changeCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        description: '',
        priority: '',
        completed: false,
        id:''
    }
}

componentDidMount() {

    console.log(this.props.task)

    this.setState({
        id: this.props.task,
        description: this.props.description,
        priority: this.props.priority,
        completed: this.props.completed
    })
}

changeDescription(e) {
    this.setState({
        description: e.target.value
    });
}

changePriority(e) {
    this.setState({
        priority: e.target.value
    });
}

changeCompleted(e) {
    this.setState({
        completed: !this.state.completed
    });
}

onSubmit(e) {
    e.preventDefault();
    const obj = {
        id: this.state.task,
        description: this.state.description,
        priority: this.state.priority,
        completed: this.state.completed
    };

    axios.post('http://localhost:4000/todos/update', obj)
        .then(res => 
    
            console.log('HEYYY'+ res.data));

    this.props.history.push('/');
}
  
  render() { 
    return (  
    <div className='popup' style={{backgroundColor: '#4C687F', borderRadius:'10px', height:window.innerHeight/2, width:window.innerWidth/2}}>  
      <div className='popup\_inner'> 
      <h3>Update Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.changeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.priority==='Low'}
                                    onChange={this.changePriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.priority==='Medium'}
                                    onChange={this.changePriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.priority==='High'}
                                    onChange={this.changePriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.changeCompleted}
                                    checked={this.state.completed}
                                    value={this.state.completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" onClick={this.props.closePopup} value="Update Task" className="btn btn-primary" />
                        </div>
                    </div>
                </form> 
    </div>  
  </div>  
  );  
  }  
}  