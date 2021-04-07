"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TodoForm_1 = require("./TodoForm");
var Todo_1 = require("./Todo");
var TodoService_1 = require("../services/TodoService");
function TodoList() {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    react_1.useEffect(function () {
        var todoList = TodoService_1.GetToDoList();
        if (todoList) {
            todoList.then(function (data) { return setTodos(data); });
        }
    }, []);
    var addTodoHandler = function (todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        var newTodos = __spreadArrays([todo], todos);
        TodoService_1.PostToDoList(todo);
        setTodos(newTodos);
    };
    var completeTodo = function (id) {
        var updateTodos = todos.map(function (todo) {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updateTodos);
    };
    var removeTodo = function (id) {
        TodoService_1.DeleteToDoList(id);
    };
    var updateTodo = function (todoId, newValue) {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(function (prev) { return prev.map(function (item) { return (item.id === todoId ? newValue : item); }); });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Insert your ToDo"),
        react_1.default.createElement(TodoForm_1.default, { onSubmit: addTodoHandler }),
        react_1.default.createElement(Todo_1.default, { todos: todos, completeTodo: completeTodo, removeTodo: removeTodo, updateTodo: updateTodo })));
}
exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map