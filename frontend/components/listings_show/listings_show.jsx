import React from 'react';
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import {Link} from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import ListingMapSingle from '../listing_map_single/listing_map_single_container';
import BookingFormContainer from '../bookings/booking_form_container';
import ReviewFormContainer from '../review_form/review_form_container';
import DeleteEditContainer from '../deleteEdit/deleteEditContainer';
import ReviewShowContainer from '../reviewShow/reviewShowContainer';
class ListingShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            reviews: [],
            listings:[],

        }
        this.handleDelete = this.handleDelete.bind(this)

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
        // if (this.props !== prevProps) {
        //     window.location.reload(false);
        // }
        
    }   

    componentDidUpdate(prevProps, prevState){
        
       
        if (prevState.reviews.length !== this.state.reviews.length){
            this.setState({
                reviews: this.state.reviews
            })
        } 

    }

    handleDelete(reviewId){
        this.props.deleteReview(reviewId)
    }


    render(){        
        let reviewerName = ""
        let reviewerId = 0
        const { listing,reviews,users } = this.props; 
        if (users[0]){
            reviewerName = users[0].username
            reviewerId = users[0].id
        }
        if (reviewerId) console.log(reviewerId)
        

        let arr = []
        if (reviews && users[0]){
            reviews.map(review =>{
                arr.push(<ReviewShowContainer review={review} user={users[0].id}/>)
            }
            
            )
        }
        else if (reviews){
            reviews.map(review =>{
                arr.push(<ReviewShowContainer review={review}/>)
            }
            
            )
        }

        
        if (!listing) return null;           
        console.log(listing.id)
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
                    {/* if (reviews){ */}
                    {/* {
                        reviews.map(review =>{
                            <ReviewShowContainer review={review}/>
                                }
                        
                        )
                    }    */}
                    {arr}
                    
                  

                    {
                    (users[0]) ? <ReviewFormContainer user={users[0].id} listing={listing.id}/> : null
                    }
                    {/* <ListingMapSingle listing={listing} lat={listing.latitude} lng = {listing.longitude}/>    */}
                    {/* <BookingFormContainer listingId={listing.id}/> */}
                </div>               
            </div>
            {/* {<DeleteEditContainer/>} */}
                
            </div>
        )
    }
}

export default ListingShow;