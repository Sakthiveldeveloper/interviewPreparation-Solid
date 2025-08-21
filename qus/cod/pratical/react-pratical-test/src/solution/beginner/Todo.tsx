import React, { useState } from "react";

function TodoApp() {
    const [task, SetTask] = useState('');
    const [todo, SetTodo] = useState([]);
    console.log('task', task)
    const AddTask = () => {
        if (task.trim() === "") return;
        SetTodo([
            ...todo, {
                id: Date.now(), text: task, complete: false
            }
        ])
        SetTask('');
    };
    console.log('todo', todo)
    const DeleteTask = (id) => {
        SetTodo(todo.filter((todo) => todo.id !== id))
    };

  const toggleComplete = (id) => {
    SetTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

    return (
        <div style={{ margin: "10px auto", width: "300px" }}>
            <h2>To Do List</h2>
            <div>
                <input
                    type="text"
                    onChange={(e) => SetTask(e.target.value)}
                    placeholder="Enter Task Here"
                />
                <button style={{ marginLeft: '10px' }} onClick={AddTask}>Add Task</button>
                {/* display Add Task */}
                {/* Render Todo List */}
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {todo.map((todo) => (
                        <li key={todo.id} style={{ margin: "10px 0" }}>
                            <span
                                onClick={() => toggleComplete(todo.id)}
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    cursor: "pointer"
                                }}
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => DeleteTask(todo.id)}
                                style={{ marginLeft: "10px" }}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp;
