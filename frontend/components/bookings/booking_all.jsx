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

    componentWillMount(){
        // this.setState({bookings:this.props.bookings.bookings})

    }

    // componentDidMount() {
    //     this.recomp()
    //   }

    componentDidUpdate(pP,pS){
        // let arr = []
        // if (pP.bookings.bookings !== this.state.bookings){
        //     this.setState({bookings:this.props.bookings.bookings})
        //     for (let x = 0; x < pP.bookings.bookings.length; x++){
        //         if (pP.bookings.bookings[x].renter_id === this.props.currentUserId[0].id){
        //             arr.push(pP.bookings.bookings[x])
    
        //         }
        //     }
        //     this.setState({edited:arr})
        //     this.setState({bookings:this.props.bookings.bookings})
        // }

        
    }

    recomp(){


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
                {/* <div className="deleteandedit">
                    <div>
                    <button className="delete-booking" onClick={this.handleDelete} key={this.props.booking.id}>Delete booking</button> 

                    </div>
                    <div>
                    <button className="edit-booking" onClick={this.handleEdit} key={this.props.booking.id*2}>Edit booking</button> 

                    </div>
                </div> */}
        </div>
            {/* {
                this.state.edited.map((booking, i) => (     
                           
                <Link key ={i} to={`/listings/${booking.listing_id}`}> 
                <div className="bookingpagetxt">You are checking in on {booking.check_in}
                    <div className="bookingpagetxt">You are checking out on {booking.check_out}</div>
                    <div className="bookingpagetxt">Visiting {booking.listing.title}</div>
                    <div className="bookingpagetxt">In {booking.listing.city}</div>
                </div>
         
                </Link > 
              
                ))
            } */}
            {/* <h1>tthgdfs</h1> */}
            {/* <div className="bookingpage1">
                <h1 className="bookingpagetxt">You are checking in on {booking.check_in}</h1>
                <h1 className="bookingpagetxt">You are checking out on {booking.check_out}</h1>
   >
                <div className="deleteandedit">
                    <div>
                    <button className="delete-booking" onClick={this.handleDelete} key={booking.id}>Delete booking</button> 

                    </div>
                    <div>
                    <button className="edit-booking" onClick={this.handleEdit} key={booking.id*2}>Edit booking</button> 

                    </div>
                </div>

            </div> */} 
            {/* <h1 className="bookingpagetxt">You are checking in on</h1> */}
        
        </div>     
    )}
}

export default BookingAll;