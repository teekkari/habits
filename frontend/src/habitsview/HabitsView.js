import React from 'react';
import axios from 'axios';

import Habit from './Habit.js';

class HabitsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      habits: [],
      loading: true,
      update: false,
    }
  }

  componentDidMount () {
    this.fetchHabits();
  }

  fetchHabits = () => {
    this.setState({
      habits: [],
      loading: true,
    })

    axios.get("http://localhost:8888/habits/list")
      .then( response => {
        for (const elem of response.data) {
          this.setState({
            habits : [
              ...this.state.habits,
              <Habit
                key={elem.id}
                id={elem.id}
                title={elem.title}
                description={elem.description}
                isComplete={elem.isComplete}
                refresh={this.refresh}
              />
            ]
          });
        }
        this.setState({loading : false});
      });
  }


  refresh = () => {
    this.fetchHabits();
  }


  // helper / debug function, to be REMOVED in the future
  dumpdb = () => {
    axios.get("http://localhost:8888/habits/list")
      .then( response => {
        console.log(response.data);
      });
  }

  render() {

    if (this.state.loading) return <div className="container"><h3>List of tasks (Loading ...)</h3></div>

    return (
      <div className="container" id="">
        <button className="hide" onClick={this.dumpdb}>DumpDB</button>
        <h3>List of tasks</h3>
        {this.state.habits}
      </div>
    );
  }

}

export default HabitsView;