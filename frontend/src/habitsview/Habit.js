import React from 'react';

import './habitsview.css';

class Habit extends React.Component {

  constructor(props) {
    super(props);

    const _title = this.props.title;
    const _description = this.props.description;

    this.state = {
      title: _title ? _title : "",
      description: _description ? _description : "",
    }
  }

  render() {
    return (
      <div className="habit">
        <span className="habit-text">
          <span className="habit-title">{this.state.title}</span>
          <p className="habit-description">{this.state.description}</p>
        </span>
        <span className="habit-controls">
          <button>complete</button><br/>
          <button>remove</button>
        </span>
      </div>
    );

  }
}

export default Habit;