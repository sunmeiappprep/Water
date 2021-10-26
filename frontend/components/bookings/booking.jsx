import React from 'react'
import BookingIndexItem from './booking_index_item';
import {Link} from 'react-router-dom'
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import Nav from '../nav/nav';

class Booking extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bookings:[],
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    
    componentDidMount() {        
        this.props.fetchBookings().then(bookings => this.setState({bookings}))
        console.log(this.state.bookings)
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.bookings.length !== this.state.bookings.length) {
            this.setState({ bookings:this.props.bookings })
        }
        if (prevProps.filter !== this.props.filter) {
            this.props.fetchBookings()
                .then(bookings => this.setState({ bookings }))
                
        }

    }

    handleDelete(e){
        
        const {bookings,removeBooking} = this.props;
       
        e.preventDefault(e);
        
        removeBooking(key)       
          this.props.history.push("/")
      }

    // reduceBooking(bookings,id){
    //     let booking2 = []
    //     if(bookings[0] && id){
    //         for (let x = 0; x < bookings.length; x++){
    //             if(bookings[x].renter.id === id){
    //                 booking2.push(bookings[x])
    //             }else{
    //             }
    //         }
    //         return booking2
    //     }
     
    // }

    render(){
        const {removeBooking,history} = this.props;
        // booking2 = []
        // bookings.each 
        // const currentUserId = this.props.currentUser[0].id

        // const reduceBook = this.reduceBooking(bookings,currentUserId)

        const {bookings} = this.props
        return(            
            <div className="bookingpage">           
                {/* <Nav/>

                <h1 className='bookingpagetxt'>This is Bookings</h1>              
                <ul className="list-indexes"> */}
                {   
                    bookings.map((booking, i) => (     
                    
                    // booking.renter_id === currentUserId ?             
                    <Link key ={i} to={`/listings/${booking.listing_id}`}> 
                    <BookingIndexItem removeBooking={removeBooking} booking= {booking} history={history} key={booking.id} button className="delete-booking" onClick={this.handleDelete} />
                    </Link > 
                    // <button className="delete-booking" onClick={this.handleDelete}>Delete booking</button> : null
                    
                    ))
                }
                {
                           
                }
                {/* {   
                    reduceBook.map((booking, i) => (     
                    
                    // booking.renter_id === currentUserId ?         
                    <button className="delete-booking" onClick={this.handleDelete} key={booking.id}>Delete booking</button> 
                    
                    ))
                } */}

                {/* </ul> */}
                   
            </div>
            // <div>Asd</div>
        )
    }


}

export default Booking;

