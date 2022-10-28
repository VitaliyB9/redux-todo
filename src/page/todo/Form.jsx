import React from "react";
import classes from "./Form.module.css"

const Form = ({ value, updateText, handleAction }) => {
  return (
    <div className={classes.form}>
    <label onSubmit={(e) => e.preventDefault()}>
      <input
        value={value}
        type="text"
        placeholder="write..."
        onChange={(e) => updateText(e.target.value)}
      />
      <button type="submit" onClick={handleAction}>
        AddTodo
      </button>
    </label>
    </div>
  );
};

export default Form;
