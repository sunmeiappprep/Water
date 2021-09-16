import React from 'react';

class BookingIndexItem extends React.Component {   

    // handleDelete(e){
    //     e.preventDefault(e);
    //     this.props.removeBooking(onelisting.id)
    //       .then(() => 
    //       this.props.history.push("/bookings")
    //       )
    //   }
    

    render(){
        const {booking,removeBooking} = this.props;       
        const onelisting = booking.listing
        console.log(onelisting)
    return(
        <div className="bookingpage">
            <h1>{booking.check_in}</h1>
            <h1>{booking.check_out}</h1>
            <h1>{onelisting.title}</h1>
            <h1>{onelisting.city}</h1>
            {/* <button className="delete-photo" onClick={this.handleDelete}>Delete Photo</button>  */}

            {/* <div className="listing-picture"> */}
                {/* <img className="index-img" src={onelisting.photoAWS} /> */}
            {/* </div>            */}
            {/* <button className="Delete-Booking" onClick={removeBooking(booking.id)}></button> */}
        </div>     
    )}
}

export default BookingIndexItem;