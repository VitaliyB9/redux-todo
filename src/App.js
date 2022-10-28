import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import User from "./page/user/User";
import Form from "./page/todo/Form";
import TodoItem from "./components/TodoItem";
import { addTodo } from "./features/todo/todoSlice";
import Posts from "./page/posts/Posts";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  const [text, setText] = useState();

  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };
  return (
    <div className="app">
      <div className="state">
        <h3>State Change</h3>
        <User />
      </div>
      <div className="todo">
        <h3>TodoApp</h3>
        <Form value={text} updateText={setText} handleAction={handleAction} />
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="posts">
        <h3>Async Thunk </h3>
        <Posts />
      </div>
    </div>
  );
}

export default App;
