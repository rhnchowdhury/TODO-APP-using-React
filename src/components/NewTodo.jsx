import { useState } from "react";
import style from "./newtodo.module.css";

const NewTodo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>

        <textarea
          type="text"
          name="desc"
          id="desc"
          onChange={handleChange}
          value={desc}></textarea>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
