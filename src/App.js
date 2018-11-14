import React, { Component } from 'react';
import logo from './logo.svg';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <p className="name"><span>Julie Loves</span></p>
            <h1 className="title"><span className="design">DESIGN</span> & <br /><span className="creative">CREATIVE CO.</span></h1>
            <div className="paragraph-container">
              <p className="subtitle"><span>a small creative company that specializes
              in designing & creating custom websites, branding, wedding stationery & illustrations.</span></p>
            </div>
          </div>
          <h1 className="coming-soon"><span><em>coming soon.</em></span></h1>
            <button className="contact"><a href="mailto:contact@julieloves.co" alt="email us">contact</a></button><button><a href="https://instagram.com/julielovesco" alt="instagram">instagram</a></button>
        </div>
      </div>
    );
  }
}

export default App;
