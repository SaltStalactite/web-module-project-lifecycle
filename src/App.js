import React from 'react';
import './App.css'
import axios from 'axios';
import User from './components/User';

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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.input}/followers`)
        .then(res => {
          this.setState({
            ...this.state,
            followers: res.data
          })
        })
        .catch(err => {
          console.error(err)
        })
        .finally(this.setState({
          ...this.state,
          input: ''
        }))
    }

  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className='App'>
        <h1>Github User Cards</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Search&nbsp;
            <input
              type='text'
              name='search'
              value={this.state.input}
              onChange={this.handleChange}
              placeholder='enter Github handle'
            />
          </label>
        </form>
        <User user={this.state.user} />
      </div>);
  }
}

export default App;
