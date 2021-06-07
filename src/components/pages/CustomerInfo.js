  import React,{Fragment} from 'react';
  import {Link} from 'react-router-dom';

  const CustomerInfo = (props) => {

    return (
    <Fragment>
      <div className="content-block">
        <div className="row">
          <h4>Customer Information</h4>
        </div>
        <div className="row">
          <div className="col-sm-12 btn-group">
            <Link to={"/details/"+ props.customer.id} className="btn btn-lg btn-info disabled float-right">customer Details</Link>
            <Link to={"/edit/"+ props.customer.id} className="btn btn-lg btn-info float-right">Edit customer</Link>
          </div>
        </div>
      </div>

      <div className="content-block">
        <div className="row">
          <h4>{props.customer.title} {props.customer.forename} {props.customer.surname}</h4>
        </div>
        <div className="row">
          <div className="col-sm-12">
          <p> Date of Birth: {props.customer.dob} </p>
          <p> Place of Birth: {props.customer.bp} </p>
          <p>email: {props.customer.email} </p>
          <p>phone: {props.customer.phone} </p>
          <p>address: {props.customer.address.address1} {props.customer.address.address2}<br/>
          {props.customer.address.address3}<br/>
          {props.customer.address.address4} </p>

          <p> Employment: {props.customer.employment} </p>
          </div>
        </div>
      </div>

    </Fragment>
  )};

  export default CustomerInfo;
