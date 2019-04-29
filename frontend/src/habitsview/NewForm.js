import React from 'react';

function NewHabitForm() {
  return (
    <form className="container" method="POST" action="http://localhost:8888/habits/new">
      <input type="text" name="title" />
      <input type="text" name="description" />

      <input type="submit" />
    </form>
  );
}

export default NewHabitForm;