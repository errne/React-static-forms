import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const CustomerList = (props) => {

  return (
    <Link to={"/details/"+ props.customer.id}  className="btn btn-lg btn-light btn-block btn-outline-dark btn-shadow">
      {props.customer.forename} {props.customer.surname}
    </Link>
  );
}


export default CustomerList;
