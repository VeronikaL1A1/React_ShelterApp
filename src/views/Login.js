import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {

    componentWillUnmount(){
        this.props.parentVisible ();
        
    }
componentDidUnmount() {
  this.props.unmount
}
   
render() {
    return (
        <div>
            <form>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}
}

export default withRouter(Login)