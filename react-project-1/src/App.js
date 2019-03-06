import React, { Component } from 'react';
import './App.css';
import '/Person';

class App extends Component {
  friends=[
     {name:'Neha Baral',Address:'Bhaktapur'},
     {name:'Puja Adhikari',Address:'Chabahil'}
  ]
  render() {
    return <h1>List of friends</h1>;
  }
}

export default App;
