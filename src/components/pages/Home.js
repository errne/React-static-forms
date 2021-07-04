// import React,{Fragment} from 'react';
//
// const Home=()=>(
//   <Fragment>
//     <div className="row my-3">
//         <p>Lets remember Javascripts</p>
//     </div>
//   </Fragment>
// )
// export default Home;

import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/Request.js'
import {url} from '../../helper/AWSRoute.js';

import CustomerList from '../bits/CustomerList.js';


class Home extends Component{

constructor(props){
  super(props);
  this.state = {customers: [] }
}

componentDidMount(){
  let request = new Request();
  request.get(`${url}`).then((data) => {
    this.setState({customers: data});
  });
}

  render(){
  return (<Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Existing customers</h4>
      </div>
      <form>
        <div className="form-group row">
          <div className="col-sm-9">
            <input type="text" className="form-control" placeholder="Search by Name"/>
          </div>
          <div className="col-sm-3">
            <input type="submit" className="btn btn-block btn-success" value="Search"/>
          </div>
        </div>
      </form>
    </div>

    <div className="row">
      <div className="col-sm-3">
        <div className="column-head">Priority customers</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Standard customers</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Unassigned customers</div>
        <div className="column-body">

          {
            this.state.customers.map((customer) =>{
              return (<CustomerList key={customer.id} customer={customer} />);
            })
          }



        </div>
      </div>
    </div>
  </Fragment>

  )};
}
export default Home;
