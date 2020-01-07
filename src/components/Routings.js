import React from 'react';
import { Route, Switch, Link, WithRouter } from "react-router-dom";

import "../styles/routingStyles.css"
import About from "../views/About";
import HomeBackground from "../views/Background";
import ShelterApp from '../views/ShelterApp';


export default (props) => (
    <div className="flexColumn">
        <div> <ul className="flexRow center">
            <li className="homeLink"><Link className="colorBrown" to="/">Home</Link></li>
            <li className="homeLink"><Link className="colorBrown" to="/shelterApp">Shelter App</Link></li>

            <li className="homeLink"><Link className="colorBrown" to="/about">About our site and shelter</Link></li>
        </ul></div>

        <Switch>
            <Route exact path="/" component={() => <HomeBackground />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/shelterApp" component={() => <ShelterApp />} />
        </Switch>


    </div>

)