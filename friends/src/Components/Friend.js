import React, { Component } from 'react';

export default class Friend extends Component {
    render() {
        const { name, age, email } = this.props.friend

        return (
            <div>
            <h5>Name: {name}</h5>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
        )
    }
}