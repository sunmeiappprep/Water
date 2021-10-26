import React, { Component } from 'react'

export default class BookingForm extends Component {
//     #  check_in   :date             not null
// #  check_out  :date             not null
// #  renter_id  :integer          not null
// #  listing_id :integer          not null
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick(e) {
        e.preventDefault()
        const booking2 = {
            check_in:"01/02/2000",
            check_out:"01/02/2001",
            renter_id:this.props.currentUser,   
            listing_id:this.props.listingId,

            
        }        
        console.log(booking2)

        this.props.createBooking(booking2);
        
    }

    render() {
        console.log(this.props)
        return (
            <div>
            
                    <label>
                    Name:
                    <button onClick={this.handleClick}>asd</button>

                    </label>
         
                This is booking form
            </div>
        )
    }
}
