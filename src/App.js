import React, { Component } from 'react';
import Navbar from './Navbar';
import Box from './Box';
import Form from './Form';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='modal'>
        <Navbar />
        <Form />
        <Box />
      </div>
    );
  }
}

export default App;
