import React from 'react';
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import LoginRouting from "../components/LoginRouting";
import Login from "../views/Login";
import Register from "../views/Register";
import axios from 'axios';


class ShelterApp extends React.Component {
   
        state = {
            users: []
        }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };



    handleInput = async (email, password) => {
        const newUser = {
            email: email,
            password: password
        }

        await axios.post("https://shelter-app-2479c.firebaseio.com", newUser);
        this.setState(prevState => { return { prevState: prevState.users.concat(newUser) } })
    }



    render() {
        const { match, location, history } = this.props;
        console.log(location.pathname);
        console.log(localStorage)


        let content;

        if (location.pathname === "/shelterApp") {
            content = (
                <div className="card center" style={{ "width": "25em", "height": "25em" }}>
                    <div className="card-body textCenter">
                        <header>
                            <h5 className="card-title paddingTitle">Welcome to our site</h5>
                            <h6 className="card-subtitle mb-2 text-muted"> Login or register if it's your first time</h6>
                        </header>
                    </div>

                    <LoginRouting match={this.props.match} />
                </div>)
        } else if (location.pathname === "/shelterApp/login") {
            content = <Login />
        }
        else if (location.pathname === "/shelterApp/register") {
            content=<Register/>
        }

        //    : location.pathname === "/shelterApp/register" ? 
        //    <Register handleInput={this.handleInput} parentInvisible = {this.parentInvisible} parentVisible={this.parentVisible}/> : null 


        return (
            <div className="flex center">
                {content}

            </div>
        )


    }
}

export default withRouter(ShelterApp);