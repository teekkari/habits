import React from 'react';
import HabitsView from './habitsview/HabitsView.js';
import './App.css';

function App() {
  return (
    <div id="main-window">
      <div id="habits-view">
        <HabitsView />
      </div>
      <div id="info-view">
        <p>Hello this is where u see cool stats</p>
      </div>
    </div>
  );
}

export default App;
