import React from 'react'
import {Link} from 'react-router-dom'
import Modal from '../modal/modal';
// import Logo from '../splash/logo.png'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import ShowBookings from '../show_bookings/show_bookings_container';

const Nav = () => (
    <div>
        <section className="navbar"> 
        <Modal />           
        <Link to="/"><img className='logo' src={'https://water-seeds.s3.amazonaws.com/logo.png'} alt="cardsmall"/></Link>                      
            <section className='midLinkBundle'>       
                {/* <Link to="/bookings" className='midLink'>My Bookings</Link> */}
                {/* <Link to="/" className='midLink'>Add Dates</Link>
                <Link to="/" className='midLink'>Guest</Link> */}
                 <SearchContainer/>

            </section>
        <div className="twoButton">
            <div>
                <ShowBookings/>

            </div>
            <div>
                <GreetingContainer className="greeting_container2"/>
            </div>

        </div>
 
         </section>
        {/* <div className="search_container">
        </div >  */}
    </div>
  );

export default Nav
