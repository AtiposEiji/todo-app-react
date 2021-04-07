"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoForm_1 = require("./TodoForm");
var ri_1 = require("react-icons/ri");
var ti_1 = require("react-icons/ti");
var si_1 = require("react-icons/si");
var react_1 = require("react");
var React = require("react");
function Todo(_a) {
    var todos = _a.todos, completeTodo = _a.completeTodo, removeTodo = _a.removeTodo, updateTodo = _a.updateTodo;
    var _b = react_1.useState({
        id: null,
        value: ""
    }), edit = _b[0], setEdit = _b[1];
    var submitUpdate = function (value) {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        });
    };
    if (edit.id) {
        return React.createElement(TodoForm_1.default, { edit: edit, onSubmit: submitUpdate });
    }
    return todos.map(function (todo, index) { return (React.createElement("div", { className: todo.completed ? "todo-row complete" : "todo-row", key: index },
        React.createElement("div", { key: todo.id }, todo.title),
        React.createElement("div", { className: "icons" },
            React.createElement(si_1.SiVerizon, { onClick: function () { return completeTodo(todo.id); } }),
            React.createElement(ri_1.RiCloseCircleLine, { onClick: function () { return removeTodo(todo.id); }, className: "delete-icon" }),
            React.createElement(ti_1.TiEdit, { onClick: function () { return setEdit({ id: todo.id, value: todo.title }); }, className: "edit-icon" })))); });
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map