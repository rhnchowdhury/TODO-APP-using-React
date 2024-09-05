import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./todo.module.css";

const Todo = ({ todo, id, onDltTodo }) => {
  const { title, desc } = todo;

  const handleDlt = (id) => {
    onDltTodo(id);
  };

  return (
    <div className={style["list-style"]}>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button className={style.submitBtn} onClick={() => handleDlt(id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Todo;
