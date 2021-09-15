import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
const ShowBookings = ({ currentUser }) => {
  
  const Mybooking = () => (
    <div className="header-group">
       {/* { console.log("asd")} */}
       <button className="My-Profile"> <NavLink to="/bookings"> Mybooking</NavLink>  </button>
    </div>
  );

  const Nothing = () => (
    <div>
       
    </div>
  );

  return (
    currentUser ?
    Mybooking() :
    Nothing()
    // Mybooking()
    // sessionLinks()
  );
}

export default ShowBookings;