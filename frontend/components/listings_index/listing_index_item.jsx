import React from 'react';

class ListingIndexItem extends React.Component {   

    render(){
        const {listing} = this.props;
    return(
        <div className="listingpage">
             <div className='leftside'>
                <li className="listing-list">
                <div className="listing-picture">
                    <img className="index-img" src='https://a0.muscache.com/im/pictures/adb982df-43bf-461e-815f-c138ce0a52a3.jpg?im_w=1200' alt="house" />
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