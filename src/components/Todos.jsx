import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = ({ todos, onDltTodo }) => {
  // console.log(todos);

  return (
    <section className={style.card}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onDltTodo={onDltTodo}></Todo>
      ))}
    </section>
  );
};

export default Todos;
