import axios from "axios";
import React from "react";

const Todo = ({ id, text, updateTodos, setUpdateTodos }) => {
  const deleteTodo = async () => {
    await axios.delete(`http://127.0.0.1:8000/${id}/`);
    setUpdateTodos(updateTodos + 1);
  };

  return (
    <div>
      <div className="card my-2">
        <div className="card-body">{text}</div>
        <div>
          <button
            onClick={deleteTodo}
            type="button"
            className="btn btn-danger btn-sm mb-2"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
