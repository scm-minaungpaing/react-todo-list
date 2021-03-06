import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos, setTodos, filterTodo }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                { (filterTodo.length > 0 ? filterTodo : todos).map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    )
}

export default Todolist
