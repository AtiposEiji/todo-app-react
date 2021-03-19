import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input
        });

        setInput("")
    };

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <input
                className="todo-input"
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                onChange={changeHandler}
                ref={inputRef} />
            <button className="todo-button">Add ToDo</button>
        </form>
    )
}

export default TodoForm;
