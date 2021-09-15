import React from 'react';

class BookingIndexItem extends React.Component {   

    render(){
        const {booking,removeBooking} = this.props;       
        console.log(this.props)
    return(
        <div className="bookingpage">
            <h1>{booking.check_in}</h1>
            <h1>{booking.check_out}</h1>
            <h1>{booking.listing_id}</h1>
            <h1>{booking.renter_id}</h1>            
            {/* <button className="Delete-Booking" onClick={removeBooking(booking.id)}></button> */}
        </div>     
    )}
}

export default BookingIndexItem;