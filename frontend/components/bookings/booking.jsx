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
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    
    componentDidMount() {        
        this.props.fetchBookings();
    }

    handleDelete(e){
        // debugger
        const {bookings,removeBooking} = this.props;
        // debugger
        e.preventDefault(e);
        console.log(bookings[0].id)
        removeBooking(bookings[0].id)       
          this.props.history.push("/")
      }

    reduceBooking(bookings,id){
        let booking2 = []
        for (let x = 0; x < bookings.length; x++){
            if(bookings[x].renter.id === id){
                booking2.push(bookings[x])
            }else{
                // console.log(bookings[x].id,id)
            }
        }
        return booking2
    }

    render(){
        const {bookings,removeBooking} = this.props;
        // booking2 = []
        // bookings.each 
        const currentUserId = this.props.currentUser[0].id

        const reduceBook = this.reduceBooking(bookings,currentUserId)
        console.log(reduceBook)  
        // {console.log(this.props)}
        // {console.log(currentUserId)}
        // {console.log(this.props)}

        return(            
            <div className="bookingpage">           
                <Nav/>

                <h1>This is Bookings</h1>              
                <ul className="list-indexes">
                {   
                    reduceBook.map((booking, i) => (     
                    
                    // booking.renter_id === currentUserId ?             
                    <Link key ={i} to={`/listings/${booking.listing_id}`}> 
                    <BookingIndexItem removeBooking={removeBooking} booking= {booking}  key={booking.id}/>
                    </Link > 
                    // console.log(booking.id) : console.log("Asd")
                    // <button className="delete-booking" onClick={this.handleDelete}>Delete booking</button> : null
                    
                    ))
                }
                {
                           
                }
                {   
                    reduceBook.map((booking, i) => (     
                    
                    // booking.renter_id === currentUserId ?         
                    <button className="delete-booking" onClick={this.handleDelete}>Delete booking</button> 
                    
                    ))
                }

                </ul>
                   
            </div>
        )
    }


}

export default Booking;

