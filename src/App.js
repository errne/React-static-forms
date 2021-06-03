import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/pages/Home.js';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="container-fluid px-0">
      <Router>
        <>
        <div className="content-area mx-5">
          <Route exact path="/" component={Home} />

        </div>
        </>
      </Router>
    </div>
  );
}

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Lets remember Javascript.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
