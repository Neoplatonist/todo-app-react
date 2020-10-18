import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {
    render() {
        const { text } = this.props.todo

        return (
            <li>
                {text}
            </li>
        )
    }
}

export default ListItem
