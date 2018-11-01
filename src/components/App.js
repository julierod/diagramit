import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Banner from "./banner/banner";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner title={"Title"} description={"Descriptive text of what our drawing is."} />
      </div>
    );
  }
}

export default App;
