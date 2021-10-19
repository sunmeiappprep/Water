import React from 'react';
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import {Link} from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import ListingMapSingle from '../listing_map_single/listing_map_single_container';
import BookingFormContainer from '../bookings/booking_form_container';
import ReviewFormContainer from '../review_form/review_form_container';
class ListingShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            reviews: [],
            listings:[],

        }
    }

    componentDidMount(){
        // debugger
        
        this.props.fetchListing(this.props.match.params.listingid);  
        // debugger
        this.props.fetchListingReviews(this.props.match.params.listingid).then(() =>
            this.setState({
                reviews: this.props.reviews,
                listings: this.props.listing
              })
        );    
     
        
    }   

    render(){        
        let reviewerName = ""
        let reviewerId = 0
        const { listing,reviews,users } = this.props; 
        if (users){
            reviewerName = users[0].username
            reviewerId = users[0].id
        }
        if (reviewerId) console.log(reviewerId)
   

        let arr = []
        if (reviews){
            reviews.map(review =>{
                arr.push(review.description)
                arr.push(review.reviewer.first_name)
                // arr.push(review.rating)
                let createdMonth = review.created_at.slice(0,8) 
                arr.push(createdMonth)


            })
        }       

        
        if (!listing) return null;           
        return(
            <div className= "listing-show-box">
                <div className="listings-index-box">
                    <div className="navbar0">
                        <section className="navbar"> 
                            <Modal />           
                            <Link to="/"><img className='logo' src={'https://water-seeds.s3.amazonaws.com/logo.png'} alt="cardsmall"/></Link>
                            <section className='midLinkBundle'>
                                {/* <Link to="/" className='midLink'>Places to stay</Link>
                                <Link to="/" className='midLink'>Experiences</Link>
                                <Link to="/" className='midLink'>Online Experiences</Link> */}
                            <SearchContainer/>

                            </section>          
                            <GreetingContainer className="greeting_container"/>      
                         </section>
                    </div>
                <div className="search_container">
                {/* <SearchContainer/> */}
                </div > 
            </div>
            <div className="show-page0">
                <div className="show-page">
                    <h3 className="listing-info">{listing.title}</h3>    
                    <h3 className="listing-info">{"Review place holder  "}{listing.city}</h3>                   
                        <div className='showing-bundle'>
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            {/* <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" />
                            <img className="photo" src={listing.photoAWS} alt="photo" /> */}
                        </div>                
                    <h3 className="listing-info">{listing.description}</h3>
                    <h4 className="listing-info">{listing.num_guest} guests. {listing.num_beds} bedrooms</h4>
                    <h3 className="listing-info">{listing.price}{"/night"}</h3>   
                    {arr}
                    <ReviewFormContainer/>
                    {/* <ListingMapSingle listing={listing} lat={listing.latitude} lng = {listing.longitude}/>    */}
                    {/* <BookingFormContainer listingId={listing.id}/> */}

                </div>               
            </div>
                
            </div>
        )
    }
}

export default ListingShow;