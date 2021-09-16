import React from 'react';
import ListingIndexItem from './listing_index_item';
import {Link} from 'react-router-dom'
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import ListingMapContainer from '../listing_map/listing_map_container';
import { NavLink } from 'react-router-dom';
import Nav from '../nav/nav';
class ListingsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    

    componentDidMount() {        
        this.props.fetchListings();
    }

    render(){
        const {listings} = this.props;        
        if (!listings) return null;
        return(            
            <div className="listings-index-box">
                    <Nav/>
                <div className="index-listing-con">
                    <div className='index-left'>
                    <h1 className="place-holderstay">Placeholder Stays</h1>
                    <h1 className="every-listing">Every Listings</h1>
                            <ul className="list-indexes">
                                {   
                                    listings.map((listing, i) => (
                                    <Link key ={i} to={`/listings/${listing.id}`} > 
                                    <ListingIndexItem listing= {listing}  key={listing.id}/>
                                    </Link>
                                    ))
                                }
                            </ul>   
                    </div>                 
                <div className='index-right'>
                    <ListingMapContainer/>
                </div>      
                </div>               
                
            </div>
        )
    }


}

export default ListingsIndex;

