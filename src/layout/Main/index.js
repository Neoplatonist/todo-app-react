import React, { Component } from 'react'
import './main.css'

import Form from '../../Form'

class Main extends Component {
    state = {
        todos: []
    }

    addTodo = value => {
        this.setState({ todos: [...this.state.todos, value] })
    }

    render() {
        return (
            <main>
                <Form addTodo={this.addTodo} />
            </main>
        )
    }
}

export default Main
