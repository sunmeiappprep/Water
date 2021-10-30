import React, { Component } from 'react'

export default class BookingForm extends Component {
//     #  check_in   :date             not null
// #  check_out  :date             not null
// #  renter_id  :integer          not null
// #  listing_id :integer          not null
    constructor(props){
        super(props)
        this.state = {
            in:'',
            out:'   '
        }
        this.handleClick = this.handleClick.bind(this)
        
    }

    componentDidUpdate(pp,ps){
        if (pp.in === this.props.in){

        }
        else{
            this.setState({in:this.props.in})

        }
        if (pp.out === this.props.out){

        }
        else{
            this.setState({out:this.props.out})

        }


    }

    handleClick(e) {
        e.preventDefault()
        console.log(e)
        const booking2 = {
            check_in:this.state.in,
            check_out:this.state.out,   
            renter_id:this.props.currentUser,   
            listing_id:this.props.listingId,

            
        }        
        console.log(booking2)

        this.props.createBooking(booking2);
        
    }

    render() {
        console.log(this.props)
        // const ci = '02/02/2000'
        // const co = "09/02/2001"
        // this.setState
        return (
            <div>
                <label>Check In:
                    <input type="text"
                    value={this.state.in}
                    onChange={(e)=> this.setState({in:e.target.value})}
                    className="check-in"
                />
                </label>
                <label>Check Out:
                    <input type="text"
                    value={this.state.out}
                    onChange={(e)=> this.setState({out:e.target.value})}
                    className="check-out"
                />
                </label>
                    <label>
                    Submit
                    <button  onClick={this.handleClick}>asd</button>

                    </label>
         
                This is booking form
            </div>
        )
    }
}
