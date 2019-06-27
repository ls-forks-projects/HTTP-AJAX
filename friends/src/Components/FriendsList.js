import React, { Component } from 'react';

import Friend from './Friend';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { friends } = this.props;

        return (
            <div>
                <h2>My Friends</h2>
                {friends.map(friend => (
                    <Friend 
                        key={friend.id}
                        friend={friend}
                    />
                ))}
            </div>
        )
    }
}