import React from 'react';
import axios from 'axios';

import './formcontrols.css';

class NewHabitForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    }
  }

  handleChange = (event) => {
    event.target.className = '';
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  sendRequest = (event) => {

    if (this.state.title === '') {
      document.getElementById('new-habit-title').className = 'invalid';
      return
    }

    axios.post('http://localhost:8888/habits/new', {
      title: this.state.title,
      description: this.state.description,
    })
    .then(() => {
      this.setState({
        title: "",
        description: "",
      });
      this.props.update();
    })
  }

  render() {
    return (
      <div className="container" id="new-habit-form">
        <h3>Add new task</h3>
        <div className="input-field">
          <input placeholder="Do dishes..." type="text" name="title" id="new-habit-title" onChange={this.handleChange} value={this.state.title}/>
          <label className="active" htmlFor="new-habit-title">Title</label>
        </div>

        <div className="input-field">
          <input placeholder="Do them before wife gets home at 7pm..." type="text" name="description" id="new-habit-description" onChange={this.handleChange} value={this.state.description} />
          <label className="active" htmlFor="new-habit-description">Description</label>
        </div>

        <button className="btn-large" style={{width: "100%"}}onClick={this.sendRequest}>ADD NEW</button>
      </div>
    );
  }
}

export default NewHabitForm;