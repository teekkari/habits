import React from 'react';
import HabitsView from './habitsview/HabitsView.js';
import NewHabitForm from './habitsview/NewForm.js';
import './App.css';

function App() {
  return (
    <div id="main-window">
      <header id="main-header">
        <h1>WELCOME TO HABIT TRACKER TM 2019</h1>
      </header>
      <main id="main-content">
        <div id="habits-view">
          <HabitsView />
        </div>
        <div id="info-view">
          <NewHabitForm />
        </div>
      </main>
    </div>
  );
}

export default App;
