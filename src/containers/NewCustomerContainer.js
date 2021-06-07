import React, {Component} from 'react';
import Request from '../helper/Request.js';
import NewCustomer from '../components/pages/NewCustomer.js';
import {url} from '../helper/AWSRoute.js';


class NewCustomerContainer extends Component{
  constructor(props){
    super(props)

    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  }


  handleCustomerPost(customer){
    const request = new Request();
    request.post(`${url}`, customer).then(() => window.location = "/customers")
  }

  render(){
    return <NewCustomer handleCustomerPost = {this.handleCustomerPost} />
  }
}

export default NewCustomerContainer;
