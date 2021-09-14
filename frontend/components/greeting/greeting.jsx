import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown'

const Greeting = ({ currentUser, logout, openModal }) => {
 

  const sessionLinks = () => (
    
    <nav className="login-signup">
      <button className="login-signup-button" onClick={() => openModal('login')}>Login</button>
      <button className="login-signup-button" onClick={() => openModal('signup')}>Signup</button>
    </nav>
    
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
  const logouter = () => (
    <div className="header-group">
      {/* <h2>Hi, {currentUser.username}!</h2> */}
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return (
    currentUser ?
    logouter(logout) :
    sessionLinks()
    // sessionLinks()
  );
}

export default Greeting;