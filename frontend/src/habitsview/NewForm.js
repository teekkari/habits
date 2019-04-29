import React from 'react';

function NewHabitForm() {
  return (
    <form className="container" method="POST" action="http://localhost:8888/habits/new">
      <label>Title</label> <br/>
      <input type="text" name="title" /><br />
      <label>Description</label> <br/>
      <input type="text" name="description" /><br /><br />

      <input type="submit" value="ADD NEW"/>
    </form>
  );
}

export default NewHabitForm;