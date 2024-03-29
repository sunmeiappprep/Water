
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
import BookingDate from '../bookings/bookingDateContainer';
import Perks from '../perks/perks';
import Checkin from '../checkin/checkin_container';
// import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from "@ramonak/react-progress-bar";
import StarRateIcon from '@mui/icons-material/StarRate';
import ShowBookings from '../show_bookings/show_bookings_container';
import ReviewFormEdit from '../review_form/review_form_edit_container';
import Footer from '../footer/footer';

// import "react-datepicker/dist/react-datepicker.css";
class ListingShow extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            reviews: [],
            listings:[],
            check_in:"",
            check_out:"",
            reviewsAvg:0,
            randomDescriptions:[
                // [
                //  `A newly renovated large studio apartment located in a safe centralized urban neighborhood 15 mins away from the ${listing.city}, which are a short bus ride or Uber away.

                //  Private entrance with electronic door lock. You will also have access to shared backyard with outdoor seating.`
                // ],
                // [
                // `Experience this exclusive retreat nestled on the quiet, lush slopes of near the city. Minutes to the airport, and to the city, but a world apart. The sunsets and stargazing over the ocean, are truly breathtaking. Enjoy an afternoon cocktail, looking out over your private pool, perfect for yoga, meditation, or morning coffee. From charging station/blender/grill/coffee grinder SO many details! Rear sliding door entrance has 0 steps, front has 1. ALL TAXES INCLUDED`
                // ],
                // [
                //  `Freshly renovated modern place 20 min from the city, with FREE parking. avenue(the main strip in Waikiki) and is a perfect base for you Hawaii getaway. Within walking distance to many popular attractions. The beach, popular surf, boutique shopping, grocery, convention center, and dining are all within walking distance. Public transportation, rental car, and bike share are easily accessible. This condo is the perfect location to start your Hawaii getaway.`   
                // ]
            ],
            description:"",
            rating:0,
            datesInvalid:[],
            fullbooking:[],
            toggleEdit:false,
            oneReview:"",
            newarr:"",

        }
        this.handleDelete = this.handleDelete.bind(this)
        this.getOneReviewFromUser = this.getOneReviewFromUser.bind(this)

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
        window.scrollTo(0, 0);
        this.props.fetchListing(this.props.match.params.listingid);  
        this.props.fetchListingReviews(this.props.match.params.listingid).then(() =>
            this.setState({
                reviews: this.props.reviews,
                listings: this.props.listing
              })
        ).then(()=> this.avgReview()
        );      

     



    }   

    componentWillMount() {
        this.setState({ randomDescriptions: [
            [
             `A newly renovated large studio apartment located in a safe centralized urban neighborhood 15 mins away from the ${this.state.listings.city}, which are a short bus ride or Uber away.
             Private entrance with electronic door lock. You will also have access to shared backyard with outdoor seating.`
            ],
            [
            `Experience this exclusive retreat nestled on the quiet, lush slopes of near the ${this.state.listings.city}. Minutes to the airport, and to the city, but a world apart. The sunsets and stargazing over the ocean, are truly breathtaking. Enjoy an afternoon cocktail, looking out over your private pool, perfect for yoga, meditation, or morning coffee. From charging station/blender/grill/coffee grinder SO many details! Rear sliding door entrance has 0 steps, front has 1. ALL TAXES INCLUDED`
            ],
            [
             `Freshly renovated modern place 20 min from the ${this.state.listings.city}, with FREE parking. avenue(the main strip in ${this.state.listings.city}) and is a perfect base for you Hawaii getaway. Within walking distance to many popular attractions. The beach, popular surf, boutique shopping, grocery, convention center, and dining are all within walking distance. Public transportation, rental car, and bike share are easily accessible. This condo is the perfect location to start your ${this.state.listings.city} getaway.`   
            ]
        ] });
        this.setState({ sets:{
            0:['https://water-seeds.s3.amazonaws.com/set1.jpg',
            'https://water-seeds.s3.amazonaws.com/set1a.jpg',
            'https://water-seeds.s3.amazonaws.com/set1aa.jpg',
            'https://water-seeds.s3.amazonaws.com/set1aaa.jpg'
            ],
            1:['https://water-seeds.s3.amazonaws.com/b.jpg',
            'https://water-seeds.s3.amazonaws.com/bb.jpg',
            'https://water-seeds.s3.amazonaws.com/bbb.jpg',
            'https://water-seeds.s3.amazonaws.com/bbbb.jpg'
            ],
            2:['https://water-seeds.s3.amazonaws.com/c.jpg',
            'https://water-seeds.s3.amazonaws.com/cc.jpg',
            'https://water-seeds.s3.amazonaws.com/ccc.jpg',
            'https://water-seeds.s3.amazonaws.com/cccc.jpg'
            ],
            3:['https://water-seeds.s3.amazonaws.com/d.jpg',
            'https://water-seeds.s3.amazonaws.com/dd.jpg',
            'https://water-seeds.s3.amazonaws.com/ddd.jpg',
            'https://water-seeds.s3.amazonaws.com/dddd.jpg'
            ],
            4:['https://water-seeds.s3.amazonaws.com/e.jpg',
            'https://water-seeds.s3.amazonaws.com/ee.jpg',
            'https://water-seeds.s3.amazonaws.com/eeee.jpg',
            'https://water-seeds.s3.amazonaws.com/eee.jpeg'
            ],   
            5:['https://water-seeds.s3.amazonaws.com/f.jpg',
            'https://water-seeds.s3.amazonaws.com/ff.jpg',
            'https://water-seeds.s3.amazonaws.com/fff.jpg',
            'https://water-seeds.s3.amazonaws.com/ffff.jpg'
            ],               
        } });
        this.props.fetchListing(this.props.match.params.listingid);
        this.props.fetchListingReviews(this.props.match.params.listingid).then(() =>
        this.setState({
            reviews: this.props.reviews,
            listings: this.props.listing
          })
        ).then(()=> this.avgReview()
        ); 
          
    }

    componentDidUpdate(prevProps, prevState){
        
       
        if (prevProps.reviews.length !== this.props.reviews.length){
            this.setState({
                reviews: this.state.reviews
            })
        }

        if (this.state.reviews !== prevState.reviews){
            this.getOneReviewFromUser()
        }

        if (prevState.newarr.length !== this.state.newarr.length){
            this.setState({newarr:this.state.newarr})
        }

        // this.props.fetchListing(this.props.match.params.listingid);
        // this.props.fetchListingReviews(this.props.match.params.listingid).then(() =>
        // this.setState({
        //     reviews: this.props.reviews,
        //     listings: this.props.listing
        //   })
        // ).then(()=> this.avgReview()
        // ); 

    }

    getOneReviewFromUser(){
        if(this.state.reviews.length > 0){
            for (let x = 0; x < this.state.reviews.length ; x++) {
                // console.log(this.state.reviews[x].reviewer_id, this.props.currentUser)
                if (this.state.reviews[x].reviewer_id === this.props.currentUser && this.state.oneReview === ""){
                    // console.log(this.state.reviews[x])
                    return this.setState({
                        oneReview:this.state.reviews[x]
                    },
                    // () => console.log(this.state.oneReview)
                    )
                }
              
            }

        }

        // if(this.state.oneReview = ""){
        //     this.setState({
        //         oneReview:{
        //             description:"Leave review",
        //             rating:5,
        //             listing_id:4,
        //             reviewer_id:2
                    
        //         }
        //     })
        // }
        
    }

    componentWillUnmount(){
        // this.setState({something: 'changed'});
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

    handleDescription = (description) => {
        this.setState({description: description});
    }

    handleRating = (rating) => {
        this.setState({rating: rating});
    }

    
    onhandleDates = (datesArray) => {
        this.setState({datesInvalid: datesArray});
    }
    
    onhandleFulllist = (fullbooking) => {
        this.setState({fullbooking: fullbooking});
    }

    onToggleEdit = () => {
        if (this.state.toggleEdit === false){
            this.setState({toggleEdit: true});
        }
        else{
            this.setState({toggleEdit: false});
        }
    }
    render(){        
        // console.log(this.state.toggleEdit)

        // console.log("listing showing",this.state)
        // console.log("listing showing",this.props)
        // if (this.state.reviews){
        //     this.getOneReviewFromUser()
        // }
        // console.log(this.state.oneReview)

        let reviewAvg = this.avgReview()
        if (reviewAvg !== NaN){
        }
        let randomNum 
        if (this.state.listings && this.state.randomDescriptions.length !== 0){
            randomNum = this.state.listings.id%this.state.randomDescriptions.length

        }


        let reviewerName = ""
        let reviewerId = 0
        const { listing,reviews,users } = this.props; 
        if (users[0]){
            reviewerName = users[0].username
            reviewerId = users[0].id
        }

        

        let arr = []
        let nondupid = []
        let newarr = []
        for (let x = reviews.length-1 ; x >= 0; x--){
            if (nondupid.includes(reviews[x].id)){
                
            }else{
                nondupid.push(reviews[x].id)
                newarr.push(reviews[x])
            }
        }
        // console.log(newarr)
        if(newarr  && (newarr.length !== this.state.newarr.length)){
            // this.setState({newarr:newarr})
        }
        if (newarr && users[0]){
            newarr.map(review =>{
                arr.push(<ReviewShowContainer editRating={this.state.rating} editDescription={this.state.description}  key={review.id} cdp={this.componentDidUpdate} review={review} user={users[0].id}/>)
            }
            
            )
        }
        else if (newarr){
            newarr.map(review =>{

                arr.push(<ReviewShowContainer editDescription={this.state.description} key={review.id} cdp={this.componentDidUpdate}  review={review}/>)
            }
            
            )
        }
        let hasReview;
        if (this.props.currentUser !== null){
            hasReview = (reviews.some((review)=> review.reviewer_id === this.props.currentUser))

        }
        // console.log(hasReview)

        
        if (!listing) return null;           

        // console.log(listing.photoAWS)
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
                            <div className="twoButton">
                            <div>
                                <ShowBookings/>
                            </div>
                                <div>
                                    <GreetingContainer className="greeting_container2"/>
                                </div>
                            </div>   
                         </section>
                    </div>
                <div className="search_container">
                {/* <SearchContainer/> */}
                </div > 
            </div>
            <div className="show-page0">
                <div className="show-page">
                    <h3 className="listing-info-title">{listing.title}</h3>
                    <div className="listing-info-review-title">
                        <div><StarRateIcon htmlColor={'red'} fontSize={"small"}/></div>

                        {
                            reviewAvg >=0 ?
                            <div className="asdasd">
                            {reviewAvg} {`(${this.state.reviews.length} reviews)`} {listing.city}
                            </div>
                            :
                            <div className="asdasd">
                            No review Yet {`(${this.state.reviews.length} reviews)`} {listing.city}
                            </div>
                        }
                  
                    </div>
                        

                    {/* {
                        {reviewAvg} ?
                        <h6>{reviewAvg}</h6>
                        :
                        null
                    }                 */}
                        <div className='showing-bundle'>
                            <div className='showing-bundle-left'>
                                <img className="photo" src={listing.photoAWS} alt="photo" width="500px"/>
                            </div>
                            <div className='showing-bundle-right'>
                            <img className="photo21" src={this.state.sets[listing.id%6][0]} alt="photo" />
                            <img className="photo22" src={this.state.sets[listing.id%6][1]} alt="photo" />
                            <img className="photo23" src={this.state.sets[listing.id%6][2]} alt="photo" />
                            <img className="photo24" src={this.state.sets[listing.id%6][3]} alt="photo" />
                            </div>
      
                            {/* <img className="photo" src={listing.photoAWS} alt="photo" /> */}
                        </div>                
                    <h3 className="listing-info-des">{listing.description}</h3>
                    <h4 className="listing-info-guest">{listing.num_guest} guests • {listing.num_beds} bedrooms</h4>
                    {/* <h3 className="listing-info">{listing.price}{"/night"}</h3>    */}
                    <div className="listing-mid-section">
                        <div className="mid-left-section">
                            <Perks avgRating={reviewAvg} listingId={listing.id}/>
                            <div ><BookingDate toggleEdit={this.onToggleEdit} handleFulllist={this.onhandleFulllist} datesInvalid={this.state.datesInvalid} onhandleDates={this.onhandleDates} listingId={listing.id} onCheckin={this.handlecheckin} onCheckout={this.handlecheckout}/></div>
                                
                            <div className="random-description">
                                {
                                    (randomNum)?
                                   
                                    <h1>{this.state.randomDescriptions[0]}</h1>
                                    :this.state.randomDescriptions[0]
                                }
                                
                            </div>
                        </div>
                        <div className="mid-right-section">
                            <Checkin datesInvalid={this.state.fullbooking} listingId={listing.id} avg={reviewAvg} price={listing.price} reviewnumber={this.state.reviews.length} check_in={this.state.check_in} check_out={this.state.check_out}/>
                        </div>
                    </div>
                    {/* if (reviews){ */}
                    {/* {
                        reviews.map(review =>{
                            <ReviewShowContainer review={review}/>
                                }
                        
                        )
                    }    */}
              
                    {
                        reviewAvg >= 0 ?
                        <div className="reviewStar"><StarRateIcon htmlColor={'red'} fontSize={"small"}/> {reviewAvg} <span>•</span> {this.state.reviews.length}  reviews</div>
                        :
                        <div className="reviewStar"><StarRateIcon htmlColor={'red'} fontSize={"small"}/> No Review Yet <span>•</span> {this.state.reviews.length}  reviews</div>

                        
                    }
                    
                    <div className="review-outer-con">
                                    <div >
                                        <div className="left-attr">Cleanliness <ProgressBar className="progress" bgColor="black" width="200%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                        <div className="left-attr">Responsive <ProgressBar className="progress" bgColor="black" width="200%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                        <div className="left-attr">Check-in <ProgressBar className="progress" bgColor="black" width="200%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>

                                    </div>

                                    <div>
                                    <div className="right-attr">Accuracy <ProgressBar className="progress" bgColor="black" width="200%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                    <div className="right-attr">Location <ProgressBar className="progress" bgColor="black" width="200%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                    <div className="right-attr">Value <ProgressBar className="progress" bgColor="black" width="200%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                        {/* <div>Accuracy <ProgressBar className="progress" bgColor="black" width="280%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                        <div>Location <ProgressBar className="progress" bgColor="black" width="280%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div>
                                        <div>Value <ProgressBar className="progress" bgColor="black" width="280%" labelColor="transparent" height="3px" completed={reviewAvg*20} /></div> */}
                                    </div>

                                </div>
                    <div className='singleReviewOuterDiv'>
                    {
                            this.state.reviews.length !== 0 
                            ?
                            arr
                            :
                            null

                        }
                    </div>
                    
                    {
                    (users[0] ) && (hasReview === false) ? <ReviewFormContainer user={users[0].id} oneReview={this.state.oneReview} listing={listing.id} onhandleDescription={this.handleDescription} onRating={this.handleRating}/> 
                    : null
                    }

                    {
                    (users[0] ) && (hasReview === true) ? <ReviewFormEdit  user={users[0].id} oneReview={this.state.oneReview} listing={listing.id} onhandleDescription={this.handleDescription} onRating={this.handleRating}></ReviewFormEdit> 
                    : null
                    }

                    <div className="singleMapDiv">
                        <ListingMapSingle listing={listing} lat={listing.latitude} lng = {listing.longitude}/>   
                    </div>
                    {/* <BookingFormContainer listingId={listing.id} in={this.state.check_in} out={this.state.check_out}/> */}
              </div>             
                    
            </div>
            {/* {<DeleteEditContainer/>} */}
              <Footer/>
                
            </div>
        )
    }
}

export default ListingShow;
