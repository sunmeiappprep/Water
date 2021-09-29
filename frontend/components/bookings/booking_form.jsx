import React, { Component } from 'react'

export default class BookingForm extends Component {
//     #  check_in   :date             not null
// #  check_out  :date             not null
// #  renter_id  :integer          not null
// #  listing_id :integer          not null
    constructor(props){
        super(props)

        this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.props)
        const booking = {
            check_in:"01/02/2000",
            check_out:"01/02/2001",
            renter_id:this.currentUser,   
            listing_id:this.listingId,

        }        
        this.props.createBooking(booking);
        
    }

    render() {
        return (
            <div>
                {console.log(this.props)}
            
                    <label>
                    Name:
                    <button onSubmit={this.handleClick}>asd</button>

                    </label>
         
                This is booking form
            </div>
        )
    }
}
