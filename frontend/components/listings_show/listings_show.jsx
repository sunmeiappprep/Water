import React from 'react';
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import {Link} from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import ListingMapSingle from '../listing_map_single/listing_map_single_container';

class ListingShow extends React.Component {
    constructor(props){
        super(props);    
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingid);    }   

    render(){        
        const { listing } = this.props;        
        if (!listing) return null;           
        return(
            <div className= "listing-show-box">
                <div className="listings-index-box">
                    <div className="navbar0">
                        <section className="navbar"> 
                            <Modal />           
                            <Link to="/"><img className='logo' src={Logo} alt="cardsmall"/></Link>
                            <section className='midLinkBundle'>
                                <Link to="/" className='midLink'>Places to stay</Link>
                                <Link to="/" className='midLink'>Experiences</Link>
                                <Link to="/" className='midLink'>Online Experiences</Link>
                            </section>          
                            <GreetingContainer className="greeting_container"/>      
                         </section>
                    </div>
                <div className="search_container">
                <SearchContainer/>
                </div > 
            </div>
            <div className="show-page0">
                <div className="show-page">
                    <h3 className="listing-info">{listing.title}</h3>    
                    <h3 className="listing-info">{"Review place holder  "}{listing.city}</h3>                   
                        <div className='showing-bundle'>
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                        </div>                
                    <h3 className="listing-info">{listing.description}</h3>
                    <h4 className="listing-info">{listing.num_guest} guests. {listing.num_beds} bedrooms</h4>
                    <h3 className="listing-info">{listing.price}{"/night"}</h3>              
                </div>               
            </div>
                <ListingMapSingle listing={listing} lat={listing.latitude} lng = {listing.longitude}/>
            </div>
        )
    }
}

export default ListingShow;