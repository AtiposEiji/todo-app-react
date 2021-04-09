import * as react from 'react';
import TodoForm from "./TodoForm";
import ToDo from "./Todo";
import { GetToDoList, PostToDoList, DeleteToDoList } from "../services/TodoService";
import { useState } from 'react';
import { useEffect } from 'react';

function TodoList() {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todoList = GetToDoList();
        if (todoList) {
            todoList.then((data) => setTodos(data));
        }
    }, [])


    const addTodoHandler = (todo: any) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        PostToDoList(todo);
        const todoList = GetToDoList();
        if (todoList) {
            todoList.then((data) => setTodos(data));
        }
    };

    const completeTodo = (id: number) => {
        let updateTodos: any;
        updateTodos = todos.map((todo: any) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updateTodos);
    }

    const removeTodo = (id: number) => {
        DeleteToDoList(id);
    }

    const updateTodo = (todoId: any, newValue: { text: string; }) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos((prev: any) => prev.map((item: any) => (item.id === todoId ? newValue : item)));
    };

    return (
        <div>
            <h1>Insert your ToDo</h1>
            <TodoForm onSubmit={addTodoHandler}></TodoForm>
            <ToDo
                todos={todos}
                removeTodo={removeTodo} 
                completeTodo={completeTodo}
                updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList;
