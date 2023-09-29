import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
    setTodo(''); // Clearing the input after adding a todo
  }

  // Function to delete a specific todo by ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div className="app">
      <div className="main-heading">
        <h1>To Do List React App</h1>
      </div>
      <div className="sub-heading">
        <br />
        <h2>Make it happen! 🌝 ☕</h2>
      </div>
      <div className="input-text-container">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todo-list-container">
        {todos.map((val) => (
            <div className="todo" key={val.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      todos.map((val2) => {
                        if (val2.id === val.id) {
                          val2.status = e.target.checked;
                        }
                        return val2;
                      })
                    );
                    //console.log(e.target.checked);
                    //console.log(val);
                  }}
                  value={val.status}
                  type="checkbox"
                />
                <p>{val.text}</p>
              </div>
              <div className="right">
                <i onClick={() => deleteTodo(val.id)} className="fas fa-times"></i>
              </div>
            </div>
        ))}
        {/* another map for active tasks */}
        <h1>
          <u>Active Tasks</u>
        </h1>
        {todos.map((val) => {
          if (val.status) {
            return <h3 key={val.id}>{val.text}</h3>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
