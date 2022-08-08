import React from "react";
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = () => {
    return (
        <div>
        <h1>Todo List</h1>
        <Todo />
        <NewTodoForm/>
        </div>
    )
}

export default TodoList;