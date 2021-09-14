import React from 'react';

class ListingIndexItem extends React.Component {   

    render(){
        const {listing} = this.props;
    return(
        <div className="listingpage">
             <div className='leftside'>
                <li className="listing-list">
                <div className="listing-picture">
                    <img className="index-img" src={listing.photoAWS} />
                </div>
            <div className="listing-info">            
                <h3 className="listing-title">{listing.title}</h3>                
            <p>{listing.num_guest} guests- {listing.num_beds} bedrooms</p>
                <div className="listing=price">                    
                    <p>${listing.price}/night</p>
                </div>
            </div>
            <br />
        </li>
        
        </div>
       
 
        </div>
       

       
    )}
}

export default ListingIndexItem;