import React, {useState} from 'react';

class ListingShow extends React.Component {
    constructor(props){
        super(props);    
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingid);
    }   


    render(){
        
        const { listing } = this.props;
        
        if (!listing) return null;     
      
        return(
            <div className= "listing-show-box">
                <div className="top-show">
                    <h3 className="listing-title">{listing.title}</h3>                    
                    <h3 className="listing-title">{listing.price}</h3>                    
                    <h3 className="listing-title">{listing.address}</h3>                    
                    <h3 className="listing-title">{listing.city}</h3>                    
                    <h3 className="listing-title">{listing.num_guest}</h3>                    
                    <h3 className="listing-title">{listing.description}</h3>     
                    <h3 className="listing-title">{listing.latitude}</h3>                   
                    <h3 className="listing-title">{listing.longitude}</h3>                   
                    <h3 className="listing-title">{listing.host_id}</h3>                    

                </div>                
            </div>
        )
    }
}

export default ListingShow;