import React, { Component } from 'react';
import List from './List.jsx';

class App extends Component {
  constructor () {
    super();
    this.state = {
      tasks: ['laundry', 'clean room', 'play video games'],
      input: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  render () {
    return (
      <div>Hello from App Component
        <List tasks={this.state.tasks} onInputChange={this.onInputChange} />
      </div>
    )
  }

  onInputChange(e) {
    this.setState({input: e.target.value}), console.log(this.state.input)
  }
}

export default App