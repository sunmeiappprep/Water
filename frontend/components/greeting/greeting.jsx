import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="login-signup" onClick={() => openModal('login')}>Login</button>
      <button className="login-signup" onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
    // sessionLinks()
  );
}

export default Greeting;