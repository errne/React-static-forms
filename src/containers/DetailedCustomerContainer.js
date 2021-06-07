import React, {Component} from 'react';
import Request from '../helper/Request.js';
import CustomerInfo from '../components/pages/CustomerInfo.js';
import {url} from '../helper/AWSRoute.js';

class DetailedCustomerContainer extends Component{
  constructor(props){
    super(props)
    this.state = {customer: null };
  }

  componentDidMount(){
    let request = new Request();
    request.get(`${url}/${this.props.id}`).then((data) => {
      this.setState({customer: data});
    });

  };

  handleCustomerDelete(){
    const request = new Request();
    const url = `${this.state.id}`;
    request.delete(`${url}`).then(() => window.location = "/customers")
  }

  render(){
    if(!this.state.customer){
      return null;
    }
    return <CustomerInfo customer = {this.state.customer}/>
  }

};

export default DetailedCustomerContainer;
