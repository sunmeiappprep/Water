import React from 'react';

class ListingIndexItem extends React.Component {   

    render(){
        const {listing} = this.props;
    return(
        <div className="listingpage">
            <div className='leftside'>
                <li className="">
                    <div className="">
                        <img className="" src={listing.photoAWS} />
                     </div>
                    <div className="listing-info">            
                    <h3 className="listing-title">{listing.title}</h3>                
                    <p>{listing.num_guest} guests- {listing.num_beds} bedrooms</p>
                    <p>${listing.price}/night</p>
                    </div>

                </li>
        
            </div>
       
 
        </div>
       

       
    )}
}

export default ListingIndexItem;