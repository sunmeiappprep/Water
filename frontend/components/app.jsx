import React from 'react';
import Splash from './splash/splash'
import UserShow from './show/show';
import Footer from './footer/footer';
import Nav from './nav/nav';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import GreetingContainer from "./greeting/greeting_container";
import SplashContainer from "./splash/splash_container";
import ShowContainer from "./show/show_container";
import { Router, Switch, Route } from "react-router-dom";
import ListingsIndexContainer from './listings_index/listing_index_container';
import ListingShowContainer from './listings_show/listings_show_container';
import BookingIndexContainer from './bookings/booking_container';

import Modal from './modal/modal';
function App() {
  return (
    <div>   
    {/* <Route path ="/" component={GreetingContainer}/> */}
    <Modal/>
    <Route exact path="/" component={SplashContainer} />
    
    {/* <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup`" component={SignupFormContainer} /> */}
    <Switch>
      <Route path="/listings/:listingid" component={ListingShowContainer} />
      {/* <Route path="/bookings/:bookingId" component={BookingShowContainer} /> */}
      <Route exact path="/bookings/:bookingId" component={BookingIndexContainer}/>
      <Route path="/listings" component={ListingsIndexContainer} asd="asddd" />
      <Route path="/bookings" component={BookingIndexContainer} />
    
    </Switch>

    </div>
  )
}




export default App;
