import React from "react";

const Todo = ({todo, id, remove}) => {
    return (
        <>
           <li>{todo}<button onClick={() => remove(id)}>X</button></li>
        </>
    )
}

export default Todo;