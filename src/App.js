import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/pages/Home.js';
import 'bootstrap';
import 'popper.js/dist/popper.js';

import ExistingCustomers from './components/pages/ExistingCustomers.js';
import NewCustomerContainer from './containers/NewCustomerContainer'
import DetailedCustomerContainer from './containers/DetailedCustomerContainer'
import EditCustomerContainer from './containers/EditCustomerContainer.js'

import './css/forms_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Router>
          <>
          <nav className="nav navbar-expand-lg navbar-dark bg-dark mb-3 mx-0 px-3">
            <Link to="/" className="navbar-brand logo-text">Forms</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/newcustomer" className="nav-link">New Customer</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customers" className="nav-link">Customers</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content-area mx-5">
            <Route exact path="/" component={Home} />
            <Route path="/newcustomer" component={NewCustomerContainer} />
            <Route path="/customers" component={ExistingCustomers} />
            <Route path="/details/:id" render = {(props) => {
              const id = props.match.params.id;
              return <DetailedCustomerContainer id = {id}/>
            }}/>
           <Route path="/edit/:id" render = {(props) => {
             const id = props.match.params.id;
             return <EditCustomerContainer id = {id}/>
           }}/>

          </div>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
