import React from 'react'
import ListItem from '../ListItem'
import './todoList.css'

const TodoList = ({ todos }) => {
    const renderTodos = todos.map((todo, index) => {
        return <ListItem key={todo + "-" + index} todo={todo} />
    })

    return (
        <ul>
            {renderTodos}
        </ul>
    )
}

export default TodoList
