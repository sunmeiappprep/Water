import React from 'react';

class BookingIndexItem extends React.Component {   
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
   
    handleDelete(e){
        // debugger
        const {bookings,removeBooking} = this.props;
        // debugger
        e.preventDefault(e);
        console.log(this.props)
        removeBooking(this.props.booking.id)       
          this.props.history.push("/")
      }

    render(){
        // console.log(this.props)
        const {booking,removeBooking} = this.props;       
        const onelisting = booking.listing
        // console.log(onelisting)
    return(
        <div className="bookingpage">
            <h1>{booking.check_in}</h1>
            <h1>{booking.check_out}</h1>
            <h1>{onelisting.title}</h1>
            <h1>{onelisting.city}</h1>
            <button className="delete-booking" onClick={this.handleDelete} key={booking.id}>Delete booking</button> 
            {/* <button className="delete-photo" onClick={this.handleDelete}>Delete Photo</button>  */}

            {/* <div className="listing-picture"> */}
                {/* <img className="index-img" src={onelisting.photoAWS} /> */}
            {/* </div>            */}
            {/* <button className="Delete-Booking" onClick={removeBooking(booking.id)}></button> */}
        </div>     
    )}
}

export default BookingIndexItem;