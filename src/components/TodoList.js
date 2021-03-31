import React, { useState , useEffect } from "react";
import TodoForm from "./TodoForm";
import ToDo from "./Todo";
import { GetToDoList } from "../services/TodoService";

function TodoList() {
    
    const [todos, setTodos] = useState([]);

    //useEffect(() => {
    //    const todoList = GetToDoList();
    //    if (todoList) {
    //        todoList.then((data) => setTodos(data));
    //    }
    //}, [])

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(url);
        const data = await response.json();
        setTodos(data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
        }
    }

    const addTodoHandler = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    };

    const completeTodo = (id) => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updateTodos);
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <div>
            <h1>Insert your ToDo</h1>
            <TodoForm onSubmit={addTodoHandler}></TodoForm>
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
                updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList;
