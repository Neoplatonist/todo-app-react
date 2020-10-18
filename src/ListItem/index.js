import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {
    handleCompleted = event => {
        this.props.completedTodo(this.props.todo)
    }

    handleDelete = event => {
        this.props.deleteTodo(this.props.todo)
    }

    render() {
        const { text, completed } = this.props.todo

        return (
            <li>
                <p
                    onClick={this.handleCompleted}
                    style={completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
                >
                    {text}
                </p>

                <button onClick={this.handleDelete}>Delete</button>
            </li >
        )
    }
}

export default ListItem
