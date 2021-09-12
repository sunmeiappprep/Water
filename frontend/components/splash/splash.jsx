import React from 'react';
// import ab from "./ab.jpg"
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import GreetingContainer from '../greeting/greeting_container';
import Card from '../card/card_container';
import Biggercard from '../biggercard/biggercard_container';
// import Modal from 'react'
import Logo from './logo.png'
import Empty from '../empty/empty_container';
import Modal from '../modal/modal_container'
import Longestcard from '../longestcard/longestcard';
import Dropdown from 'react-dropdown'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
class Splash extends React.Component {


  

  render() {
    // const loginB = <GreetingContainer/>
    {/* const signUp = <button onClick={() => openModal('signup')}>Signup</button> */}

    // const options = [
    //   loginB
    // ];

    return (
      <div>
          <div className="splash">
            <div className="navbar0">
            <section className="navbar"> 
            {/* <Modal />            */}
            <Link to="/"><img className='logo' src={Logo} alt="cardsmall"/></Link>
            {/* <Link to="/">AirBnb Logo</Link> */}
            <section className='midLinkBundle'>
              <Link to="/" className='midLink'>Places to stay</Link>
              <Link to="/" className='midLink'>Experiences</Link>
              <Link to="/" className='midLink'>Online Experiences</Link>
            </section>         
            {/* <div class="dropdown"> */}
            {/* <Dropdown options={options} value={"My Profile"}/> */}
            <GreetingContainer/>
           
           
        </section>

            </div>
            <div className="search_container">
            <SearchContainer/>
            </div>
            
        <Empty/>
  

    
        {/* <section className = 'EN'> */}
          
        {/* </section> */}
       



        {/* <Link to="/">
          <div className ="leftlogo">Logo PlaceHolder</div>
        </Link>       
          <div className ="search">Search PlaceHolder</div>
        <Link to="/login">        
          <div className ="login">Login</div>
        </Link>
        <Link to="/signup">        
          <div className ="signup">Signup</div>
        </Link> */}
      
      </div>
      <div className='bottomComp'>

      <div>
        <h1 className='en'>Explore nearby</h1>
          <section className="explore_nearby">                   
              <Card/>
              <Card/>
              <Card/>
              <Card/>       
          </section>
          <section className="explore_nearby2">                   
              <Card/>
              <Card/>
              <Card/>
              <Card/>       
          </section>
      </div>
      <div>
        <h1 className='en'>Live anywhere</h1>
          <section className="Live_anywhere">                   
              <Biggercard/>
              <Biggercard/>
              <Biggercard/>
              <Biggercard/>       
          </section>        
      </div>
        <div className='hosting'>
          <Longestcard/>
        </div>
      </div>
      </div>
      


      
    );
  };
}

export default Splash