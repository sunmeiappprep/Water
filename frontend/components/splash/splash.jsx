import React from 'react';
// import ab from "./ab.jpg"
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import GreetingContainer from '../greeting/greeting_container';
import Card from '../card/card_container';
import Biggercard from '../biggercard/biggercard_container';
// import Modal from 'react'
import Logo from './logo.jpg'
import Empty from '../empty/empty_container';

class Splash extends React.Component {




  render() {
    return (
      <div>
          <div className="splash">
        <section className="navbar">            
            <Link to="/"><img className='logo' src={Logo} alt="cardsmall"/></Link>
            <SearchContainer className="search_container"/>
            <GreetingContainer className="greeting_container"/>
            {/* <Modal isOpen={true}>
              <h5>asd</h5>
              <p>asdasd</p>
            </Modal> */}
        </section>
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
     
      </div>


      
    );
  };
}

export default Splash;