import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../features/todo/todoSlice";
import classes from "./TodoItem.module.css"

const TodoItem = ({ completed, id, text }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.ordered}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(completedTodo({ id }))}
      />
      {text}
      <button className={classes.btn} onClick={() => dispatch(removeTodo(id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
