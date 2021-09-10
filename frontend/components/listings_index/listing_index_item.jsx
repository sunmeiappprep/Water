import React from 'react';

class ListingIndexItem extends React.Component {   

    render(){
        const {listing} = this.props;
    return(
        <li className="listing-list">
            <div className="listing-picture">
                <img className="index-img" src='https://a0.muscache.com/im/pictures/bf9b9da4-b781-4793-b7c6-c994d874c5c5.jpg?im_w=1200' alt="house" />
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
    )}
}

export default ListingIndexItem;