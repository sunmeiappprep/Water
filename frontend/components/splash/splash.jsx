import React from 'react'
import { Link } from 'react-router-dom';
import { Router, Switch, Route } from "react-router-dom";


function Splash (props) {
  return (
    <div>
      <h1>This is from Splash</h1>
      <h1>This user is {props.user}</h1>
      <Link to="/login">
          Login      
      </Link>
    <Switch>
    </Switch>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  )
}

export default Splash
