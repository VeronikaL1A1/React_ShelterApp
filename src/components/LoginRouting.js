import React from 'react';
import { Route, Link, withRouter, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Register from "../views/Register";
import Login from "../views/Login";
import Button from "./Button";
import axios from 'axios';

class LoginRouting extends React.Component {
    constructor(props) {
        super(props)
        
    }
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    // };

    // userInput = async (email, password) => {
    //     const newUser = {
    //         email: email,
    //         password: password
    //     }
    //     await axios.post("", newUser);
    //     this.setState(prevState => { return { prevState: prevState.users.concat(newUser) } })
    // }
    render() {
        const { match, location, history } = this.props;
        

        return (
            <div >
                <div className="flexRow center">
                    <Button className={" loginRouting"} type={"button"} bootstrapClass={"btn btn-light"} child={<Link to="/shelterApp/login">Login form</Link>}  />
                    <Button className={" loginRouting"} type={"button"} bootstrapClass={"btn btn-light"} child={<Link to="/shelterApp/register">Register form</Link>} />
                </div>
                <div>

                    {/* <Route path="/shelterApp/login" render={()=><Login/>} />
                    <Route path="/shelterApp/register" render={()=><Register/>} /> */}
                </div>
            </div>
        )
    }

}

export default withRouter( LoginRouting)