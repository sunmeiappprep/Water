import React from 'react';
import {Link} from 'react-router-dom'

class BookingAll extends React.Component {   
    constructor(props){
        super(props);
        this.state = {
            bookings :"",
            edited : "",
            deleted : false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.recomp = this.recomp.bind(this);

    }

    
    handleDelete(e){
        
        e.preventDefault();
        this.props.removeBooking(this.props.booking.id)
        window.location.reload()

      }

      handleEdit(e){
        e.preventDefault();
        let testing ={
            id:this.props.booking.id,
            check_in:"1/2/2022",
            check_out: "11/2/2022",
            renter_id: 6,
            listing_id: 29,
        }
        this.props.updateBooking(testing)
        window.location.reload()
      }


    render(){


    return(
        <div className="bookingpage1">
            <div>
                <div className="bookingpagetxt">You are checking in on {this.props.booking.check_in}
                    <div className="bookingpagetxt">You are checking out on {this.props.booking.check_out}</div>
                    <div className="bookingpagetxt">Visiting {this.props.booking.listing.title}</div>
                    <div className="bookingpagetxt">In {this.props.booking.listing.city}</div>
                </div>
        </div>

        </div>     
    )}
}

export default BookingAll;