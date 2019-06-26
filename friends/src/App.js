import React from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';

import FriendsList from './Components/FriendsList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      friendData: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friendData: response.data
        })
      })
      .then(response => {
          console.log(response)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  render() {
    // const { friends } = this.state

    return (
      <div className="App">
        <FriendsList friends={this.state.friendData}
        />
      </div>
    )
  }
}

export default App;
