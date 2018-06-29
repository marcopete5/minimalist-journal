import React, { Component } from 'react';
import Navbar from './Navbar';
import BoxContainer from './BoxContainer';
import Form from './Form';
import './App.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      toggle: false,
    }
  }

  toggleForm = () => {
    this.setState({toggle: !this.state.toggle})

  }

  render() {
    return (
      this.state.toggle ? 
        <div className='modal'>
          <Navbar />
          {this.state.toggle ? <Form /> : null}
          <button onClick={this.toggleForm}>Edit Form</button>
          <BoxContainer />
        </div> :
        <div style={{margin: "0px -8px"}}>
          <Navbar />
          {this.state.toggle ? <Form /> : null}
          <button onClick={this.toggleForm}>Edit Form</button>
          <BoxContainer />
        </div>
    );
  }
}

export default App;
