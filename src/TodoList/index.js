import React from 'react'
import ListItem from '../ListItem'
import './todoList.css'

const TodoList = ({ todos, completedTodo }) => {
    const renderTodos = todos.map((todo, index) => {
        return <ListItem
            key={index}
            todo={todo}
            completedTodo={completedTodo}
        />
    })

    return (
        <ul>
            {renderTodos}
        </ul>
    )
}

export default TodoList
