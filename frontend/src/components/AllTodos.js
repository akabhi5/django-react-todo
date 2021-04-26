import axios from "axios";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const AllTodos = ({ updateTodos, setUpdateTodos }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const res = await axios.get("http://localhost:8000/");
      setTodos(res.data);
    };
    getAllTodos();
  }, [updateTodos]);

  return (
    <div>
      <h1>All todos</h1>
      <div className="col-md-6 offset-md-3 mt-5">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.todo}
            updateTodos={updateTodos}
            setUpdateTodos={setUpdateTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
