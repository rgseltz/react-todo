import React, {useState} from "react";
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import {v4 as uuid} from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([{id: uuid(), todo: 'Wash dishes'}, {id: uuid(), todo:'Go for a run'}, {id: uuid(), todo: 'Make dinner'}, {id: uuid(), todo:'Call Mom'}])
    const addTodo = (newTodo) => {
        setTodos([...todos, {...newTodo, id: uuid()}])
    } 
    const remove = (todo) => {
        setTodos(todos.filter((t) => t.id !== todo))
    }
    return (
        <div>
        <h1>Todo List</h1>
        <ul>{todos.map(({id, todo}) => <Todo 
                                            key={id} 
                                            todo={todo} 
                                            remove={remove} 
                                            id={id}/>)}
        </ul>
        <NewTodoForm add={addTodo}/>
        </div>
    )
}

export default TodoList;