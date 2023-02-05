import { useState } from "react"

import "./index.css"

function InputForm(props) {
    const [value, setValue] = useState("");

    const { addTodoItem } = props;

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTodoItem(value)
        setValue("")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="form__input" value={value} placeholder="Type to add..." onChange={handleChange}/>
            <button className="form__button button" type="submit">Add a item</button>
        </form>
    )
}

export default InputForm