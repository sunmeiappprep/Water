// import React from 'react';
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
import React, { useState } from "react";
import BookingDate from '../bookings/BookingDate';
import Perks from '../perks/perks';

// import "react-datepicker/dist/react-datepicker.css";
class ListingShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            reviews: [],
            listings:[],
            check_in:"",
            check_out:"",
            reviewsAvg:0

        }
        this.handleDelete = this.handleDelete.bind(this)

    }


    avgReview(){
        let total = 0
        let totalAvg = this.state.reviews.length
        // console.log(this.state.reviews[0].rating)
        for(let x  = 0; x < this.state.reviews.length; x++) {
            total += this.state.reviews[x].rating
        }
        let answer = (total/totalAvg)
        // console.log(answer.toFixed(2))
        return answer.toFixed(2)
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
        ).then(()=> this.avgReview());      

     


        // if (this.props !== prevProps) {
        //     window.location.reload(false);
        // }
        
    }   

    componentDidUpdate(prevProps, prevState){
        
       
        if (prevProps.reviews.length !== this.props.reviews.length){
            this.setState({
                reviews: this.state.reviews
            })
        } 

    }

    handleDelete(reviewId){
        this.props.deleteReview(reviewId)
    }

    handlecheckin = (checkin) => {
        this.setState({check_in: checkin});
    }

    handlecheckout = (checkout) => {
        this.setState({check_out: checkout});
    }



    render(){        
        console.log(this.state.check_in)
        let reviewAvg = this.avgReview()
        if (reviewAvg !== NaN){
            console.log(reviewAvg)
        }
        let total = 0
        // if (this.state.reviews){
        //     for (let x = 0; x < 1; x++){
        //         total += this.state.review[x].rating
        //     }
        //     console.log(total)
        // }
        // console.log(this.state.reviews[0])
        

        let reviewerName = ""
        let reviewerId = 0
        const { listing,reviews,users } = this.props; 
        if (users[0]){
            reviewerName = users[0].username
            reviewerId = users[0].id
        }
        // if (reviewerId) console.log(reviewerId)
        

        let arr = []
        // console.log(reviews)
        let nondupid = []
        let newarr = []
        for (let x = reviews.length-1 ; x >= 0; x--){
            // console.log(reviews[x])
            if (nondupid.includes(reviews[x].id)){
                
            }else{
                nondupid.push(reviews[x].id)
                newarr.push(reviews[x])
            }
        }
        // console.log(newarr)
        if (newarr && users[0]){
            newarr.map(review =>{
                // console.log(newarr)
                arr.push(<ReviewShowContainer  key={review.id} cdp={this.componentDidUpdate} review={review} user={users[0].id}/>)
            }
            
            )
        }
        else if (newarr){
            newarr.map(review =>{
                // console.log("asd")

                arr.push(<ReviewShowContainer key={review.id} cdp={this.componentDidUpdate}  review={review}/>)
            }
            
            )
        }

        
        if (!listing) return null;           
        // console.log(listing.id)
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
                    {
                        {reviewAvg} ?
                        <h6>{reviewAvg}</h6>
                        :
                        null

                    }                
                        <div className='showing-bundle'>
                            <div className='showing-bundle-left'>
                                <img className="photo" src={listing.photoAWS} alt="photo" width="500px"/>
                            </div>
                            <div className='showing-bundle-right'>
                            <img className="photo21" src={listing.photoAWS} alt="photo" />
                            <img className="photo22" src={listing.photoAWS} alt="photo" />
                            <img className="photo23" src={listing.photoAWS} alt="photo" />
                            <img className="photo24" src={listing.photoAWS} alt="photo" />
                            </div>
      
                            {/* <img className="photo" src={listing.photoAWS} alt="photo" /> */}
                        </div>                
                    <h3 className="listing-info">{listing.description}</h3>
                    <h4 className="listing-info">{listing.num_guest} guests. {listing.num_beds} bedrooms</h4>
                    <h3 className="listing-info">{listing.price}{"/night"}</h3>   
                    <Perks avgRating={reviewAvg}/>
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
                    <BookingFormContainer listingId={listing.id} in={this.state.check_in} out={this.state.check_out}/>
                    <div ><BookingDate onCheckin={this.handlecheckin} onCheckout={this.handlecheckout}/></div>
                    
                </div>               
            </div>
            {/* {<DeleteEditContainer/>} */}
                
            </div>
        )
    }
}

export default ListingShow;