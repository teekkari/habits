import React from 'react';
import axios from 'axios';

import { IconContext } from "react-icons";
import { FaCheckCircle } from 'react-icons/fa';

import './habitsview.css';

class Habit extends React.Component {

  constructor(props) {
    super(props);

    const _id = this.props.id;
    const _title = this.props.title;
    const _description = this.props.description;
    const _isComplete = this.props.isComplete;

    this.state = {
      id: _id,
      title: _title ? _title : "",
      description: _description ? _description : "",
      isComplete: _isComplete ? _isComplete : false,
    }
  }

  remove = () => {
    axios.post('http://localhost:8888/habits/remove', {
      id : this.state.id
    })
    .then(() => { this.props.refresh(); })
  }

  complete = () => {
    this.setState({
      isComplete: true,
    });

    axios.post('http://localhost:8888/habits/update', {
      id : this.state.id,
      type : 'complete',
      data : true
    });
  }

  showCompleteIcon = () => {
    if (this.state.isComplete){
      return (
        <IconContext.Provider value={{color: "green"}}>
          <span class="habit-icon"><FaCheckCircle /></span>
        </IconContext.Provider>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="habit">
        <span className="habit-text">
          <span className="habit-title"><small>[{this.state.id}]</small> {this.state.title} {this.showCompleteIcon()}</span>
          <p className="habit-description">{this.state.description}</p>
        </span>
        <span className="habit-controls">
          <button onClick={this.complete}>complete</button><br/>
          <button onClick={this.remove}>Remove</button>
        </span>
      </div>
    );

  }

}

export default Habit;