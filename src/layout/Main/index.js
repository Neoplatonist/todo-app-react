import React, { Component } from 'react'
import './main.css'

import Form from '../../Form'
import TodoList from '../../TodoList'

class Main extends Component {
    state = {
        todos: []
    }

    addTodo = value => {
        const todo = {
            text: value,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, todo] })
    }

    render() {
        return (
            <main>
                <Form addTodo={this.addTodo} />

                <TodoList todos={this.state.todos} />
            </main>
        )
    }
}

export default Main
