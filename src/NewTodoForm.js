import React, {useState} from "react";

const NewTodoForm = ({add}) => {
    const INITIAL_STATE = {todo:''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (evt) => {
        evt.preventDefault()
        const {name, value} = evt.target;
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        const {todo} = formData
        add({...formData});
        setFormData('')
    }
    return (
        <div>
            <h2>New Todo</h2>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="todo">Name</label>
                    <input 
                        type="text"
                        name="todo"
                        value = {formData.todo}
                        placeholder="Enter todo here"
                        onChange={handleChange}
                    />
                    <button>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;