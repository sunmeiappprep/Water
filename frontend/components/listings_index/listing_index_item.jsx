import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

class ListingIndexItem extends React.Component {   

    reviewsAvg(){
        let sum = 0
        if (this.props.listing.reviews.length > 0){
            for(let x = 0; x < this.props.listing.reviews.length; x++){
                sum += this.props.listing.reviews[x].rating
            }
            return (sum/this.props.listing.reviews.length).toFixed(2)
        }
        else{
            return "No review"
        }

        
    }

    reviewCount(){
        if (this.props.listing.reviews.length > 0){
            return this.props.listing.reviews.length 
        }
        else{
            return null
        }
    }

    render(){
        const {listing} = this.props;

        const reviewAvg = this.reviewsAvg()
        const reviewCount = this.reviewCount()
    return(
        <div className="leftside">  
            <li>
                <div className="leftsidePic">
                    <div className="leftsidePic3">
                        <img className="leftsidePic2" src={listing.photoAWS} width="250px" height="250px" />
                        
                    </div>
                    <div className="listing-info">   
                        {
                            listing.title.length < 39 ?
                            <div  className="listing-info1">
                            {listing.title}{listing.title}{listing.title}
                            </div>
                            :
                            <div  className="listing-info1">
                            {listing.title}
                        </div> 
                        }
                        
                        <div className="listing-info2">
                            <br></br>
                        </div>
                        <div>
                            <br></br>
                        </div>
                        <div className="listing-info3">
                            {listing.num_guest} guests- {listing.num_beds} bedrooms
                        </div>
                        <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        </div>
                        <div className="listing-info4">
                            {
                                reviewCount > 0 ?
                                <div className="listing-info42">
                                    {reviewAvg}<div><StarRateIcon htmlColor={'red'} fontSize={"small"}/></div><div className="listing-info422">{reviewCount}(reviews)</div>
                                </div>
                                :
                                <div className="listing-info42">
                                </div>
                            }
                           
                            <div className="listing-info43">
                                ${listing.price}/night
                            </div>
                        </div>
                    </div>
                </div>

            </li>                      

        </div>
    )}
}

export default ListingIndexItem;