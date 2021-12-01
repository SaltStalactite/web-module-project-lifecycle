import React from 'react';
import './App.css'
import axios from 'axios';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    input: 'SaltStalactite'
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/SaltStalactite')
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data,
        })
      })
      .catch(err => {
        console.error(err)
      });
    axios.get('https://api.github.com/users/SaltStalactite/followers')
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
  }

  render() {
    return (<div className='App'>
      <h1>Github User Cards</h1>
    </div>);
  }
}

export default App;
