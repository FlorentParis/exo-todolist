import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import "./style/TodoList.css";

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    /* Je n'ai pas utilisé de useEffect pour verifier la longueur de mon array [todos] car je ne pourrais pas empecher l'éxecution du code ci dessous dans un useEffect */
    const addTodo = todo => {
        const newTodo = [todo, ...todos];
        const todosDiv = document.querySelectorAll('.todo');
        const todosCompleteDiv = document.querySelectorAll('.complete');
        if (todosDiv.length == 0) {
            setTodos(newTodo);
        }else if (todosDiv.length <= 10) {
            if(todosDiv.length >= 5) {
                if((todosDiv.length - todosCompleteDiv.length) < 5) {
                    setTodos(newTodo);
                } else {
                    window.alert("Trop de taches en cours, veuillez en terminer quelques une avant d'en rajouter.")
                }
            }else {
                setTodos(newTodo);
            }
        }else {
            window.alert("Liste trop longue, veuillez supprimer des taches.")
        }
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