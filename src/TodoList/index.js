import React from 'react'
import './todoList.css'

const TodoList = ({ todos }) => {
    const renderTodos = todos.map((todo, index) => {
        return <li key={todo + "-" + index}>{todo}</li>
    })

    return (
        <ul>
            {renderTodos}
        </ul>
    )
}

export default TodoList
