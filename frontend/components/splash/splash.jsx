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
import ListingIndexItem from '../listings_index/listing_index_item';
class Splash extends React.Component {
  constructor(props){
    super(props)
    // this.openModal = this.openModal.bind(this)
  }

  

  render() {
    const loginB = <GreetingContainer/>
    const icon = <AccountCircleIcon/>
    {/* const signUp = <button onClick={() => openModal('signup')}>Signup</button> */}
    // const options = [
    //   <button className="login-signup" onClick={() => openModal('login')}>Login</button>,
    //   <button className="login-signup" onClick={() => openModal('signup')}>Signup</button>
    //   ];
    const options = [
      loginB
    ];

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
            {/* <Dropdown options={options} value={"My Profile"}/>   */}
            <GreetingContainer/>
            {/* <Dropdown options={options} onChange={this._onSelect} value={"Profile"} placeholder={icon} /> */}
           
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
              <Card site="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240" onChange={this._onSelect} name="Queens" drive="1" />
              <Card site="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240" name="Washington" drive="5"/>
              <Card site="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240" name="Philadelphia" drive="2"/>
              <Card site="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240" name="Boston" drive="5"/>    
          </section>
          <section className="explore_nearby2">                   
              <Card site="https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg?im_q=medq&im_w=240" name="Ailington" drive="5"/>
              <Card site="https://a0.muscache.com/im/pictures/a161fb95-6875-4aaa-aecd-3a46dead3220.jpg?im_q=medq&im_w=240" name="Virginia Beach" drive="8"/>
              <Card site="https://a0.muscache.com/im/pictures/71ae2609-6082-4f31-aa20-8629d7fab7d7.jpg?im_q=medq&im_w=240" name="Portland" drive="7"/>    
              <Card site="https://a0.muscache.com/im/pictures/f7ac6e57-65cb-446b-8631-331072463af4.jpg?im_q=medq&im_w=240" name="North Bergen" drive="1"/>    

          </section>
      </div>
      <div>
        <h1 className='en'>Live anywhere</h1>
          <section className="Live_anywhere">                   
              <Biggercard site="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480" category="Outdoor Getaways"/>
              <Biggercard site="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480" category="Unique stays"/>
              <Biggercard site="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480" category="Entire homes" />
              <Biggercard site="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480" category="Pets allowed" />       
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