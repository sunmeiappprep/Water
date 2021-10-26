import React from 'react';

class BookingIndexItem extends React.Component {   
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
   
    handleDelete(e){
        
        const {bookings,removeBooking} = this.props;
        
        e.preventDefault(e);
        removeBooking(this.props.booking.id)       
        // window.location.reload()
        
      }

    render(){
        const {booking,removeBooking} = this.props;       
        const onelisting = booking.listing
    return(
        <div className="bookingpage">
            <div className="bookingpage1">
                <h1 className="bookingpagetxt">You are checking in on {booking.check_in}</h1>
                <h1 className="bookingpagetxt">You are checking out on {booking.check_out}</h1>
                <h1 className="bookingpagetxt">Visiting {onelisting.title}</h1>
                <h1 className="bookingpagetxt">In {onelisting.city}</h1>
                <button className="delete-booking" onClick={this.handleDelete} key={booking.id}>Delete booking</button> 
            </div>
           
            {/* <button className="delete-photo" onClick={this.handleDelete}>Delete Photo</button>  */}

            {/* <div className="listing-picture"> */}
                {/* <img className="index-img" src={onelisting.photoAWS} /> */}
            {/* </div>            */}
            {/* <button className="Delete-Booking" onClick={removeBooking(booking.id)}></button> */}
        </div>     
    )}
}

export default BookingIndexItem;