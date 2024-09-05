import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { v4 as uuid } from "uuid";
import style from "./home.module.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    // console.log(todo);
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuid(), todo }];
    });
  };

  const handleDlt = (dltTodo) => {
    const filterTodo = todos.filter((todo) => todo.id !== dltTodo);
    setTodos(filterTodo);
  };

  return (
    <div className={style.container}>
      <h1
        style={{ textAlign: "center", color: "#1bc2b8", marginBottom: "10px" }}>
        Todo App
      </h1>
      <NewTodo onAddTodo={handleAddTodo}></NewTodo>
      <Todos todos={todos} onDltTodo={handleDlt}></Todos>
    </div>
  );
};

export default Home;
