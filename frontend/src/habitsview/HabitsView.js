import React from 'react';
import axios from 'axios';

import Habit from './Habit.js';

class HabitsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      habits: [],
      loading: true,
    }

    axios.get("http://localhost:8888/habits/list")
      .then( response => {
        this.setState({loading : false});

        for (const elem of response.data) {
          this.setState({
            habits : [
              ...this.state.habits,
              <Habit title={elem.title} description={elem.description} />
            ]
          });
        }
      });
  }

  render() {

    if (this.state.loading) return <div className="container">Loading ...</div>

    return (
      <div className="container" id="">
        <h3>List of habits</h3>
        {this.state.habits}
      </div>
    );
  }

}

export default HabitsView;