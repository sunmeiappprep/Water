import React from 'react';
import Splash from './splash/splash'
import UserShow from './show/user_show';
import Footer from './footer/footer';
import Nav from './nav/nav';
import Modal from './modal/modal';

import { Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>   
    <Route exact path ="/" component={Splash}/>
    <Route exact path ="/users/:currentUser" component={UserShow}/>
    <Route exact path="/login" component={Modal} />

    </div>
  )
}




export default App;
