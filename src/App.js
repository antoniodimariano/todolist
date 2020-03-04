import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    var hello = 'Hello World'
    var mySelectStyle = {
      border :'1px solid black',
      display : 'inline-block',
      padding:'5px'
    };
    return (
      <div style = {mySelectStyle}/>
     
    )
  }


}

export default App;
