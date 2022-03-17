import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import "./style/TodoList.css";

export default function TodoList({children}) {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodo = [todo, ...todos];

        setTodos(newTodo);
        console.log(todo, ...todos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const deleteTodo = id => {
        const removeTodo = [...todos].filter(todo => todo.id !== id);

        setTodos(removeTodo);
    }

    return (
        <div className='TodoList'>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo}  deleteTodo={deleteTodo} />
        </div>
    );
}