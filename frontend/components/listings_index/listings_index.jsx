import React from 'react';
import ListingIndexItem from './listing_index_item';
import {Link} from 'react-router-dom'

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
                <h2 className="main-index-title">All Listings</h2>
                    <ul className="list-indexes">
                        {
                            listings.map((listing, i) => (
                               <Link key ={i} to={`/listings/${listing.id}`} style={{ textDecoration: 'none' }}> <ListingIndexItem 
                                    listing= {listing}
                                    key={listing.id}
                                />
                                </Link>
                            ))
                        }
                    </ul>
            </div>
        )
    }


}

export default ListingsIndex;

