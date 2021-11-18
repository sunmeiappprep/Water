import React from 'react';

class BookingIndexItem extends React.Component {   
    constructor(props){
        super(props);
        this.state = {
            booking :"",
            deleted : false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.checkIfcoll = this.checkIfcoll.bind(this);

    }

    componentDidMount() {

        this.setState({ booking: this.props.booking }, () => {
          });
      }



    checkIfcoll(){

        
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }

        let start = (new Date(`${this.props.in[2]}-${this.props.in[1]}-${this.props.in[0]}`))
        // console.log(`${this.props.in[2]}-${this.props.in[1]}-${this.props.in[0]+1}`)
        let end = (new Date(`${this.props.out[2]}-${this.props.out[1]}-${this.props.out[0]}`))
        start = start.addDays(1)
        end = end.addDays(1)


        while (start < end){
            for( let  x = 0; x < this.props.datesInvalid.length; x++){
                let currentSetin = new Date(this.props.datesInvalid[x].check_in)
                let currentSetout = new Date(this.props.datesInvalid[x].check_out)

                if (currentSetin < start && start < currentSetout) {
                   return false
                }
                

            }
            start = start.addDays(1)

        }

    }

   
    handleDelete(e){
        // console.log(e)
        const {bookings,removeBooking} = this.props;
        
        e.preventDefault();
        this.setState({booking:""})
        this.props.removeBooking(this.props.booking.id)
        window.location.reload()

      }

      handleEdit(e){
        e.preventDefault();
        // console.log(this.props)
        let editConflict = this.checkIfcoll()
        // console.log(editConflict)
        if (editConflict === false){
            alert ("There is a conflict with the selected dates")
        }
        else{
            let testing ={
                id:this.props.booking.id,
                check_in:`${this.props.in[0]}/${this.props.in[1]}/${this.props.in[2]}`,
                check_out:`${this.props.out[0]}/${this.props.out[1]}/${this.props.out[2]}`,
                renter_id: this.props.renter_id,
                listing_id: this.props.booking.listing_id,
            }
            this.props.updateBooking(testing)
            window.location.reload() 
        }


      }


    render(){
        // console.log("asd")
        // console.log(this.props)
        // console.log("This is booking index item",this.props.datesInvalid)
        const checkIfcoll = this.checkIfcoll()
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
                <div className="deleteandedit">
                    <div>
                    <button className="delete-booking" onClick={this.handleDelete} key={booking.id}>Delete booking</button> 

                    </div>
                    {
                        this.props.datesInvalid.length > 0 ? 
                        <div>
                        <button className="edit-booking" onClick={this.handleEdit} key={booking.id*2}>Submit new edited dates</button> 
                        </div>
                        :null
                    }
                   
                </div>

            </div>
            <div>
                {checkIfcoll}
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