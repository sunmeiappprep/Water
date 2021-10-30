import React from 'react';

class BookingIndexItem extends React.Component {   
    constructor(props){
        super(props);
        this.state = {
            booking :"",
            deleted : false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.booking)
        // this.setState({booking:2}), ()=>{
        //     (console.log(this.state)) 
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
        console.log(e)
        const {bookings,removeBooking} = this.props;
        
        e.preventDefault();
        this.setState({booking:""})
        removeBooking(this.props.booking.id)
        window.location.reload()
        
        

        
        
   
            
      
       
        
      }

    render(){
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