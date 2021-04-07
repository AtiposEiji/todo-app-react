import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { SiVerizon } from "react-icons/si";
import { useState } from 'react';
import React from "react";
import { TodoModel } from "../model/todoModel";


function Todo({ todos, completeTodo, removeTodo, updateTodo }: any) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = (value: any) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo: any, index: any) => (
        <div
            className={todo.completed ? "todo-row complete" : "todo-row"}
            key={index}>
            <div key={todo.id} >
                {todo.title}
            </div>
            <div className="icons">
                {/*<SiVerizon onClick={() => completeTodo(todo.id)} />*/}
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon" />
                {/*<TiEdit*/}
                {/*    onClick={() => setEdit({ id: todo.id, value: todo.title })}*/}
                {/*    className="edit-icon" />*/}
            </div>
        </div>
    ));
}

export default Todo;
