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
import ShowBookings from '../show_bookings/show_bookings_container';
import { Photo } from '@material-ui/icons';
class Splash extends React.Component {
  constructor(props){
    super(props)
    // this.openModal = this.openModal.bind(this)
    this.state = {
      first:"",
      second:"",
      stateListings:"asd"
    }
  }

  componentWillMount(){

    this.setState({listings:this.props.listings})

  }

  componentDidMount(){
    this.props.fetchListings()
    .then
    (listings => this.setState({stateListings:Object.values(listings.listings)}))

  }

  componentDidUpdate(pP,PS){
    // if (pP.listings !== this.state.stateListings){
    //   this.setState({stateListings:this.props.listings})
    // }
  }

  render() {
    const loginB = <GreetingContainer/>
    const icon = <AccountCircleIcon/>

    const options = [
      loginB
    ];
    let first = "";
    let second = "";
    let third = "";
    let fourth = "";

    if (this.props.listings.length > 0){
      first = this.props.listings[0]
      second = this.props.listings[1]
      third = this.props.listings[2]
      fourth = this.props.listings[3]
    
  }

    // console.log(first.id)

    
    // console.log(this.state.stateListings)

    return (
      <div>
          <div className="splash">
            <div className="navbar0">
            <section className="navbar"> 
            <Link to="/"><img className='logo' src={'https://water-seeds.s3.amazonaws.com/logo.png'} alt="cardsmall"/></Link>
            <section className='midLinkBundle'>
            <SearchContainer/>
              {/* <Link to="/" className='midLink'>Places to stay</Link>
              <Link to="/" className='midLink'>Experiences</Link>
              <Link to="/" className='midLink'>Online Experiences</Link> */}
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

            </div>
            <div className="search_container">
            {/* <SearchContainer/> */}
            </div>
            
        <Empty/>
  


      
      </div>
      <div className='bottomComp'>

      <div className="Explore_nearby_con">
        <div className='en'>Explore nearby</div>
          <div className="explore_nearby">                   
              <Card site="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240" onChange={this._onSelect} name="Miami" drive="2" />
              <Card site="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240" name="Cancun" drive="5"/>
              <Card site="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240" name="Renaissance Island" drive="2"/>
              <Card site="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240" name="Maui" drive="5"/>    
          </div>
          <div className="explore_nearby2">                   
              <Card site={"https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg?im_q=medq&im_w=240"} name="Honolulu" drive="5"/>
              <Card site="https://a0.muscache.com/im/pictures/a161fb95-6875-4aaa-aecd-3a46dead3220.jpg?im_q=medq&im_w=240" name="Virginia Beach" drive="8"/>
              <Card site="https://a0.muscache.com/im/pictures/71ae2609-6082-4f31-aa20-8629d7fab7d7.jpg?im_q=medq&im_w=240" name="Phuket" drive="7"/>    
              <Card site="https://a0.muscache.com/im/pictures/f7ac6e57-65cb-446b-8631-331072463af4.jpg?im_q=medq&im_w=240" name="North Bergen" drive="2"/>    

          </div>
      </div>
      <div className="live_Anywhere_con">
        <h1 className='en'>Live anywhere</h1>
          <div className="Live_anywhere">                   
              <Biggercard listingId={first.id} site={first.photoAWS} category="Outdoor Getaways"/>
              <Biggercard listingId={second.id} site={second.photoAWS} category="Unique stays"/>
              <Biggercard listingId={third.id} site={third.photoAWS} category="Entire homes" />
              <Biggercard listingId={fourth.id} site={fourth.photoAWS} category="Pets allowed" />       
          </div>        
      </div>
        {/* <div className='hosting'> */}
          {/* <Longestcard/> */}
        {/* </div> */}
      </div>
      </div>
      


      
    );
  };
}

export default Splash