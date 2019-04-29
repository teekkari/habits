import React from 'react';
import HabitsView from './habitsview/HabitsView.js';
import NewHabitForm from './habitsview/NewForm.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      updated: false
    }
  }

  update = () => {
    this.setState({updated: true});
    this.setState({updated: false});
  }

  render() {
    return (
      <div id="main-window">
        <header id="main-header">
          <h1>WELCOME TO HABIT TRACKER TM 2019</h1>
        </header>
        <main id="main-content">
          <div id="habits-view">
            <HabitsView key={this.state.updated} />
          </div>
          <div id="info-view">
            <NewHabitForm update={this.update} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
