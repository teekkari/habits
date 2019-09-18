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

  componentWillMount() {
    document.title = "HABIT TRACKER";
  }

  // hacky update func. so sibling component (NewHabitForm) can update HabitsView
  update = () => {
    this.setState({updated: true});
    this.setState({updated: false});
  }

  render() {
    return (
      <div id="main-window">
        <header id="main-header">
          <h1>Task Stack</h1>
        </header>
        <main id="main-content">
          <div id="info-view">
            <NewHabitForm update={this.update} />
          </div>
          <div id="habits-view">
            <HabitsView key={this.state.updated} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
