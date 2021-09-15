import React from 'react'
import BookingIndexItem from './booking_index_item';
import { Link } from 'react-router-dom';
class Booking extends React.Component {
    constructor(props){
        super(props);
    }
    

    componentDidMount() {        
        this.props.fetchBookings();
    }

    render(){
        const {bookings,removeBooking} = this.props;
        // booking2 = []
        // bookings.each 

        // {console.log(this.props)}
        const currentUserId = this.props.currentUser[0].id
        // {console.log(currentUserId)}

        return(            
            <div>  
                <h1>This is Bookings</h1>              
                <ul className="list-indexes">
                {   
                    bookings.map((booking, i) => (       
                    booking.renter_id === currentUserId ?             
                    <Link key ={i} to={`/listings/${booking.listing_id}`}> 
                    <BookingIndexItem removeBooking={removeBooking} booking= {booking}  key={booking.id}/>
                    </Link> : null
                    
                    ))
                }

                </ul>   
            </div>
        )
    }


}

export default Booking;

