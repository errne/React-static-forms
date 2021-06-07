import React, {Component} from 'react';
import Request from '../helper/Request.js';
import EditCustomer from '../components/pages/EditCustomer.js';
import {url} from '../helper/AWSRoute.js';

class EditCustomerContainer extends Component{
  constructor(props){
    super(props)
    this.state = {customer: null };
    this.handleCustomerDelete = this.handleCustomerDelete.bind(this);
    this.handleCustomerPatch = this.handleCustomerPatch.bind(this);
    this.handleCustomerPut = this.handleCustomerPut.bind(this);
  }

  componentDidMount(){
    let request = new Request();
    request.get(`${url}${this.props.id}`).then((data) => {
      this.setState({customer: data});
    });

  };

  handleCustomerDelete(){
    console.log(this.state)
    const request = new Request();
    request.delete(`${url}${this.props.id}`).then(() => window.location = "/customers")
  }

  handleCustomerPatch(customer){
    const request = new Request();
    request.patch(`${url}`, customer).then(() => window.location = `"/details/"${this.props.id}`)
  }


  handleCustomerPut(customer){
    const request = new Request();
    const urlput = `${url}` + this.props.id;
    request.patch(`${urlput}`, customer).then(() => window.location = "/customers")
}

  render(){
    if(!this.state.customer){
      return null;
    }
    return <EditCustomer customer = {this.state.customer} handleCustomerPatch = {this.handleCustomerPatch} handleCustomerDelete = {this.handleCustomerDelete} handleCustomerPut = {this.handleCustomerPut} />
  }

};




export default EditCustomerContainer;
