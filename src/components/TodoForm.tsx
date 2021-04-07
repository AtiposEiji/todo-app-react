import * as react from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";

function TodoForm(props: any) {
    const [input, setInput] = react.useState("");

    const changeHandler = (e: any) => {
        setInput(e.target.value);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input,
            completed: "false"
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
                />
            <button className="todo-button">Add ToDo</button>
            
        </form>
    )
}

export default TodoForm;
