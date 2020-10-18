import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {

    handleCompleted = () => {
        console.log('clicked list item')
        this.props.completedTodo(this.props.todo)
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
            </li >
        )
    }
}

export default ListItem
