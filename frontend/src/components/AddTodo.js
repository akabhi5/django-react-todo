import axios from "axios";
import React, { useState } from "react";

const AddTodo = ({ setUpdateTodos, updateTodos }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8000/", { todo });
    setTodo("");
    setUpdateTodos(updateTodos + 1);
  };

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <h3 htmlFor="exampleInputEmail1" className="form-label">
            Enter Todo
          </h3>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
