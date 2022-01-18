import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavigationButton extends Component {
    render() {
        return (
            <Link to={this.props.path} style={style}>{this.props.label}</Link>
        )
    }
}

const style = {
    margin: '0px 10px',
    padding: '5px 10px',
    borderRadius: '10px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '28pt',
    backgroundColor: '#555',
}
