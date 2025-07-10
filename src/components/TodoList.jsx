import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {

    if(input.trim() === "") return;
    const itemToAdd = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };

    setTodoList((prev) => [...prev, itemToAdd]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            completed: !entry.completed,
          };
        } else {
          return entry;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((entry) => entry.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={(e) => addTodo(e)}>Add</button>

      <ul>
        {todoList.map((entry) => (
          <li key={entry.id}>
            <input
              onChange={() => toggleCompleted(entry.id)}
              type="checkbox"
              checked={entry.completed}
            />
            <span className={entry.completed ? "strikeThrough" : ""}>
              {entry.text}
            </span>
            <button onClick={() => deleteTodo(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
