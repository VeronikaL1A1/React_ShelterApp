import React from "react";
import axios from"axios";

class Register extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""

        }
    }


    handleChange =(event)=> {
        this.setState({[event.target.name]:event.target.value})}
    

    
    handleClick=()=>{
       
        this.props.handleInput(this.state.email,this.state.password);
        this.setState({email:"", password:""})
    }
    

    render() {
        

        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm your Password</label>
                        <input type="password" name="confirmPassword" className="form-control" id="exampleInputPassword1" placeholder="Confirm the Password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>

        )
    }
}
                    
export default Register 