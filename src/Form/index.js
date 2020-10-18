import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        // Create a new todo through prop function
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}
