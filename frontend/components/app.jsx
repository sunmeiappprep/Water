import React from 'react';
import Splash from './splash/splash'
import UserShow from './show/show';
import Footer from './footer/footer';
import Nav from './nav/nav';
import Modal from './modal/modal';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import GreetingContainer from "./greeting/greeting_container";
import SplashContainer from "./splash/splash_container";
import ShowContainer from "./show/show_container";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>   
    <Route path ="/" component={GreetingContainer}/>
    <Route exact path="/" component={SplashContainer} />
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer} />
    <Switch>
      <Route exact path="/show" component={ShowContainer} />
    </Switch>

    </div>
  )
}




export default App;
