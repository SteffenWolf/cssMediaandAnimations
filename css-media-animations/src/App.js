import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      spin: false,
      navWidth: 0,
    }
  }

  toggleSpin = () => {
    this.setState({
      spin: !this.state.spin
    })
  }

  openNav = () => {
    this.setState({
      navWidth: 250
    })
  }

  closeNav = () => {
    this.setState({
      navWidth: 0
    })
  }

  render() {
    return (
      <div className="">
        <div id="heart" ></div>
        <div class="square" style={{animationName: this.state.spin && 'spin'}} onClick={this.toggleSpin}></div>
        <div class=""></div>
        <div id="mySidenav" className="sidenav" style={{width: this.state.navWidth}}>
          <a href="#/" className="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="#/">About</a>
          <a href="#/">Services</a>
          <a href="#/">Clients</a>
          <a href="#/">Contact</a>
        </div>
        <span style={{fontSize: 30, cursor: 'pointer'}} onClick={this.openNav}>&#9776;</span>
      </div>
    );
  }
}

export default App;
