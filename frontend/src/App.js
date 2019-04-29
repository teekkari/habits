import React from 'react';
import HabitsView from './habitsview/HabitsView.js';
import NewHabitForm from './habitsview/NewForm.js';
import './App.css';

function App() {
  return (
    <div id="main-window">
      <div id="habits-view">
        <HabitsView />
      </div>
      <div id="info-view">
        <NewHabitForm />
      </div>
    </div>
  );
}

export default App;
