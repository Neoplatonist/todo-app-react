import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.todo}
            </li>
        )
    }
}

export default ListItem
