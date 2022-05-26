import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {id:uuidv4(), title: input, completed: false}, ])
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a Todo..." value={input} onChange={onInputChange} className="task-input" required />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
