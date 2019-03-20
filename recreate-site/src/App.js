import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      drop: true,
      navHeigth: 0,
    }
  }

  toggledrop = () => {
    this.setState({
      drop: !this.state.drop
    })
  }

  openNav = () => {
    this.setState({
      navHeigth: 400
    })
  }

  closeNav = () => {
    this.setState({
      navHeigth: 0
    })
  }
  render() {
    return (
      <div className="App">
        <div className="headWrap">
        <div className={this.state.drop ? "hidden-nav show" : 'hidden-nav'}>

              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>

            </div>
          <nav>
            <div className="logo">Start Bootstrap</div>
            <ul id="drop" className="list" style={{width: this.state.navWidth}}>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
            
            
            <button className="stack" style={{fontSize: 12, cursor: 'pointer'}} onClick={this.toggledrop}>MENU &#9776; </button>
          </nav>
        </div>
      </div>
      
    );
  }
}

export default App;
