import React from 'react';

class BookingIndexItem extends React.Component {   
    constructor(props){
        super(props);
        this.state = {
            booking :"",
            deleted : false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.booking)
        // this.setState({booking:2}), ()=>{

        // } 
        this.setState({ booking: this.props.booking }, () => {
            // console.log(this.state.booking);
          });
      }

    // componentDidUpdate(pp,prevState){
    //    if (this.state.deleted === true){
            
    //    }
    // }

   
    handleDelete(e){
        // console.log(e)
        const {bookings,removeBooking} = this.props;
        
        e.preventDefault();
        this.setState({booking:""})
        this.props.removeBooking(this.props.booking.id)
        // window.location.reload()

      }

      handleEdit(e){
        e.preventDefault();
        let testing ={
            check_in:"23/12/2021",
            check_out: "27/1/2021",
            renter_id: 6,
            listing_id: 20,
        }
        this.props.updateBooking(testing)
        // window.location.reload()
      }


    render(){
        // console.log("asd")
        const {booking,removeBooking} = this.props;       
        const onelisting = booking.listing
        if (!onelisting) return null
    return(
        <div className="bookingpage">
            <div className="bookingpage1">
                <h1 className="bookingpagetxt">You are checking in on {booking.check_in}</h1>
                <h1 className="bookingpagetxt">You are checking out on {booking.check_out}</h1>
                <h1 className="bookingpagetxt">Visiting {onelisting.title}</h1>
                <h1 className="bookingpagetxt">In {onelisting.city}</h1>
                <button className="delete-booking" onClick={this.handleDelete} key={booking.id}>Delete booking</button> 
                <button className="delete-booking" onClick={this.handleEdit} key={booking.id*2}>Edit booking</button> 

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