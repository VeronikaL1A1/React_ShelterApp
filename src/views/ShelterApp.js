import React from 'react';
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import LoginRouting from "../components/LoginRouting";
import Login from "../views/Login";
import Register from "../views/Register";
import axios from 'axios';


class ShelterApp extends React.Component {
    constructor() {
        super()
        this.state = {
            hideParent: true,
            users: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.parentVisible= this.parentVisible.bind(this);
        this.unmount=this.unmount.bind(this)
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };



    handleInput = async (email,password) => {
        const newUser ={
            email:email,
            password:password
        }

        await axios.post("https://shelter-app-2479c.firebaseio.com",newUser);
        this.setState(prevState=>{return{prevState:prevState.users.concat(newUser)}})
    }

    handleClick() {
        this.setState({ hideParent: !this.state.hideParent });
        let stateData = this.state.hideParent;
        localStorage.setItem('stateData', stateData);

  

    }


    componentWillMount () {
        const returnData = localStorage.getItem('stateData')==="false";
        this.setState({hideParent:returnData});
        localStorage.removeItem("stateData");
        this.setState({hideParent:true});
    }

   unmount () {
        localStorage.removeItem("stateData");
        this.setState({hideParent:true});
    }
    // componentWillUpdate() {
    //     localStorage.removeItem("stateData")
        
    // }

    parentVisible () {
        this.setState({ hideParent: !this.state.hideParent })
    }


    render() {
        const { match, location, history } = this.props;
        console.log(this.state.hideParent);
        console.log(location.pathname);
        

        // const parentDiv = document.getElementById("parentdDiv");
        // const parentStyle={"border":"red"};
        // if(this.state.hideParent!==true){ parentDiv.style={parentStyle}}

        return (
            <div className="flex center">
                <div style={{ "display": this.state.hideParent !== true ? "none" : "block" }} >
                    <div className="card center" style={{ "width": "25em", "height": "25em" }} >
                        <div className="card-body textCenter">
                            <h5 className="card-title paddingTitle">Welcome to our site</h5>
                            <h6 className="card-subtitle mb-2 text-muted"> Login or register if it's your first time</h6>


                        </div>
                            
                        <LoginRouting match={this.props.match} handleClick={this.handleClick} />
                    </div>
                </div>
                {/* {location.pathname === "/shelterApp/login" && <Login />}
                {location.pathname === "/shelterApp/register" && <Register />} */}

                {location.pathname === "/shelterApp/login" ? 
                <Login unmount={this.unmount} parentVisible={this.parentVisible}  parentInvisible = {this.parentInvisible} /> : location.pathname === "/shelterApp/register" ? 
                <Register handleInput={this.handleInput} parentInvisible = {this.parentInvisible} parentVisible={this.parentVisible}/> : null } 
            </div>)
    }

}

export default withRouter(ShelterApp);
