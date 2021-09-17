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
        const filterListing = [];
        const {listings,location} = this.props;        
        if (!listings) return null;

        let city = []
        if(location.filtercity){
            city = (Object.values(location.filtercity))
            
        }
        let listing2 = []
        if (city != undefined)
        {
            for (let x = 0; x < this.props.listings.length; x++){              
                if (this.props.listings[x]["city"] === city[0]){
                   
                    listing2.push(this.props.listings[x])
                }
            }            
        }

        if (listing2.length === 0){
            for (let x = 0; x < this.props.listings.length; x++){            
                    listing2.push(this.props.listings[x])
            }            
        }
        
  
        
        return(            
            <div className="listings-index-box">
                <div className='fixedNav'>
                    <Nav/>
                </div>
                    
                <div className="index-listing-con">
                    <div className='index-left'>
                    <h1 className="place-holderstay">Placeholder Stays</h1>
                    <h1 className="every-listing">Every Listings</h1>
                            <ul className="list-indexes">
                                {   
                                    listing2.map((listing, i) => (
                                    <Link key ={i} to={`/listings/${listing.id}`} > 
                                    <ListingIndexItem listing= {listing}  key={listing.id}/>
                                    </Link>
                                    ))
                                }
                            </ul>   
                    </div>                 
                <div className='index-right'>
                    <ListingMapContainer place={listing2[listing2.length-1]}/>
                </div>      
                </div>               
                
            </div>
        )
    }


}

export default ListingsIndex;

