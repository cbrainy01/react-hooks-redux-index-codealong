import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo"
import { v4 as uuid } from "uuid"

function TodoContainer() {

  const todos = useSelector( (state) => state.todos.entities )
  const renderTodos = todos.map( (todo) => <Todo key={uuid()} todo={todo}/> ) 
  return <div>TodoContainer</div>;
}

export default TodoContainer;
