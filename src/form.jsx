import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [todos, setTodos] = useState([]);
 const [activity, setActivity] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    // Add the new todo (with name and age) to the list
    setTodos([...todos,  {activity: activity} ]);
    // Optionally, clear the inputs after adding the todo
    setName("");
    setAge("");
  };
  const removetodo = (index) => {
       const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);      
  }

  return (
    <form >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
        <div>
        <label htmlFor="activity">Activity:</label>
        <input
          type="text"
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        </div>

      <button type="submit" onClick={addTodo}>Add</button>

      <div>
        {/* <p>{todos}</p> */}
        <h2>Todo List</h2>
        {todos.map((todo, index) => (
          <div key={index}>
            <p>
              <strong>Name:</strong> {todo.activity}
              <button  type="button" onClick={() => removetodo(index)}>Remove</button> 
            </p>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Form;
