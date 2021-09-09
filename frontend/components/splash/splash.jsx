import React from 'react';
// import ab from "./ab.jpg"
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import GreetingContainer from '../greeting/greeting_container';
import Card from '../card/card_container';
import Empty from '../Empty/empty_container';

class Splash extends React.Component {




  render() {
    return (
      <div>
          <div className="splash">
        <section className="navbar">            
            <Link className="Splash" to="/">Airbnb2</Link>
            <SearchContainer/>
            <GreetingContainer/>
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
      
    );
  };
}

export default Splash;