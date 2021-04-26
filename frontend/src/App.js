import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AllTodos from "./components/AllTodos";
import Header from "./components/Header";

function App() {
  const [updateTodos, setUpdateTodos] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTodo updateTodos={updateTodos} setUpdateTodos={setUpdateTodos} />
        <div className="my-5">
          <AllTodos updateTodos={updateTodos} setUpdateTodos={setUpdateTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
