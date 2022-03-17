import react, {useState} from 'react';
import "./style/Todo.css";

export default function Todo({todos, completeTodo, deleteTodo}) {

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo complete" : "todo"} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div onClick={() => deleteTodo(todo.id)}>
                X
            </div>
        </div>
    ))
}