import React from 'react';
import axios from 'axios';

import './habitsview.css';

class Habit extends React.Component {

  constructor(props) {
    super(props);

    const _id = this.props.id;
    const _title = this.props.title;
    const _description = this.props.description;

    this.state = {
      id: _id,
      title: _title ? _title : "",
      description: _description ? _description : "",
    }
  }

  remove = () => {
    axios.post('http://localhost:8888/habits/remove', {
      id : this.state.id
    })
    .then(() => { this.props.refresh(); })
  }

  render() {
    return (
      <div className="habit">
        <span className="habit-text">
          <span className="habit-title">[{this.state.id}] {this.state.title}</span>
          <p className="habit-description">{this.state.description}</p>
        </span>
        <span className="habit-controls">
          <button>complete</button><br/>
          <button onClick={this.remove}>Remove</button>
        </span>
      </div>
    );

  }

}

export default Habit;