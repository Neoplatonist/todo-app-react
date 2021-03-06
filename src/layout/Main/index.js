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

    completedTodo = todo => {
        const newList = [...this.state.todos]
        const index = newList.indexOf(todo)
        newList[index].completed = !newList[index].completed

        this.setState({ todos: newList })
    }

    deleteTodo = delTodo => {
        const newList = this.state.todos.filter(todo => todo !== delTodo)
        this.setState({ todos: newList })
    }

    render() {
        return (
            <main>
                <Form addTodo={this.addTodo} />

                <TodoList
                    todos={this.state.todos}
                    completedTodo={this.completedTodo}
                    deleteTodo={this.deleteTodo}
                />
            </main>
        )
    }
}

export default Main
