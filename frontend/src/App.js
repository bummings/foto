import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'i forgot how to react'
    };
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app__header'>foto thing</h1>
        <h2 className='app__text'>{this.state.hello}</h2>
      </div>
    );
  }
}

export default App;
