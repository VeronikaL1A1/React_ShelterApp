import React from 'react';
import {BrowserRouter, Route, Switch, Link, WithRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Routing from "./components/Routings";



export default class Browserrouting extends React.Component {
  render () {
    let match=this.props.match
    return (
      <BrowserRouter>
        <Routing match={match}/>
      </BrowserRouter>
    )
  }
}




// https://dog.ceo/api/breeds/image/random