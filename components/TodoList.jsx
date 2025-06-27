import {useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Spinner from 'react-bootstrap/Spinner';
import "../src/App.css";

export default function TodoList(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState();

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    };

    // [ "todo" : { text: "text", completed: false }, "todo" : { text: "text", completed: false },]
    
    // const toggleTodo = (index) => {
    //     const updated = [...todos];
    //     updated[index].completed = !updated[index].completed;
    //     setTodos(updated);
    // };

    function toggleTodo(index){
        const updated = [...todos];
        updated[index].completed = !updated[index].completed;
        setTodos(updated);
    }

    const deleteTodo = (index) => {
        const updated = [...todos];
        updated.splice(index, 1);
        setTodos(updated);
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);

    }, []);

    if (loading){
        return <div style={{ display: "flex", justifyContent: "center", alignItems : "center" }}><Spinner animation="border" /></div>;
    }



    return(
        <>
        <div className="container">
            <h1 className="title">Todos</h1>
            <div className="input-section">
            <input
                type="text"
                placeholder="Add a new task"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            </div>

            <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                key={index}
                todo={todo}
                index={index}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                />
            ))}
            </ul>
        </div>

        </>
    );
}