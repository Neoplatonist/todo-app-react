import React from 'react'
import ListItem from '../ListItem'
import './todoList.css'

const TodoList = ({ todos, completedTodo, deleteTodo }) => {
    const renderTodos = todos.map((todo, index) => {
        return <ListItem
            key={index}
            todo={todo}
            completedTodo={completedTodo}
            deleteTodo={deleteTodo}
        />
    })

    return (
        <ul>
            {renderTodos}
        </ul>
    )
}

export default TodoList
