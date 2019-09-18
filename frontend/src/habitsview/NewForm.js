import React from 'react';
import axios from 'axios';

class NewHabitForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  sendRequest = () => {

    if (this.state.title === '') {
      document.getElementById('new-habit-title').style.border = "1px solid red";
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
        <label>Title *</label> <br />
        <input type="text" name="title" id="new-habit-title" onChange={this.handleChange} value={this.state.title}/><br />
        <label>Description</label> <br />
        <input type="text" name="description" onChange={this.handleChange} value={this.state.description} /><br /><br />

        <input type="submit" value="ADD NEW" onClick={this.sendRequest}/>
      </div>
    );
  }
}

export default NewHabitForm;