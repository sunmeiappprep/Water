import React, { Component } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import GreetingContainer from '../greeting/greeting_container';

export default class Checkin extends Component {
    constructor(props){
        super(props)
        this.state = {
            totalToggleOn:false,
            check_in:"",
            check_out:"",
            guest:1,
            checkinMMDDYYYY:"",
            checkoutMMDDYYYY:"",
            dateDiff:0,
            total:0,
            in:'',
            out:'',
            bookings:[],
        }
        this.handleClick = this.handleClick.bind(this)
        this.toggle = this.toggle.bind(this)
        this.checkIfcoll = this.checkIfcoll.bind(this);

    }


    
    handleClick(e) {
        e.preventDefault()
        // console.log(e)
        let editConflict = this.checkIfcoll()
        // console.log(editConflict)
        if (editConflict === false){
            alert ("There is a conflict with the selected dates")
        }else{
            const booking2 = {
                check_in:this.state.check_in,
                check_out:this.state.check_out,   
                renter_id:this.props.currentUser,   
                listing_id:this.props.listingId,
    
                
            }        
            // console.log(booking2)
    
            this.props.createBooking(booking2);
            window.location.reload()
        }


    }

    checkIfcoll(){


        
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        let splitCheckin = this.state.check_in.split("/")
        let splitCheckout = this.state.check_out.split("/")

        let start = (new Date(`${splitCheckin[2]}-${splitCheckin[1]}-${splitCheckin[0]}`))
        // console.log(splitCheckin)

        // console.log(("checkin",`${splitCheckin[2]}-${splitCheckin[1]}-${splitCheckin[0]}`))
        let end = (new Date(`${splitCheckout[2]}-${splitCheckout[1]}-${splitCheckout[0]}`))
        start = start.addDays(1)
        end = end.addDays(1)

        
        if (end < start) {
            return false
        }


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


    convertFormatIn(dateString){
        let x = dateString.split("/")
        let mmddyyyy = x[1]+"/"+x[0]+"/"+x[2]
        this.setState({checkinMMDDYYYY:mmddyyyy})
    }

    convertFormatOut(dateString){
        let y = dateString.split("/")
        let mmddyyyy = y[1]+"/"+y[0]+"/"+y[2]
        this.setState({checkoutMMDDYYYY:mmddyyyy})
    }

    componentDidUpdate(pP,Ps){
        if (pP.check_in === this.props.check_in){
        }
        else{
            this.setState({check_in:this.props.check_in})
            this.convertFormatIn(this.props.check_in)
            this.setState({totalToggleOn:false})

        }
        if (pP.check_out === this.props.check_out){
        }
        else{
            this.setState({check_out:this.props.check_out})
            this.convertFormatOut(this.props.check_out)
            this.setState({totalToggleOn:false})



        }

        
    }

    toggle(e){
        e.preventDefault()
        if (this.state.totalToggleOn === false){
            this.setState({totalToggleOn:true})
        }
        else{
            this.setState({totalToggleOn:false})
        }

        var date1 = new Date(this.state.checkinMMDDYYYY);
        var date2 = new Date(this.state.checkoutMMDDYYYY);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.setState({dateDiff:Difference_In_Days})
        let ceilifference_In = Math.ceil(Difference_In_Days + 1)
        let total = Math.ceil(this.props.price * ceilifference_In)
        this.setState({total:total})

        
    }   

    render() {

        return (
            <div>
                <div className="CheckinOuter">
                    <div className="priceReview">
                        <div >
                            <span className="checkPrice">
                            ${this.props.price}
                            </span>
                            <span className="night">
                            /night
                            </span>
                           
                        </div>
                        <div className="checkinreviewText">
                            {
                                this.props.avg >= 0 ?
                            <span>
                            <StarRateIcon htmlColor={'red'} fontSize={"small"}/>{this.props.avg}({this.props.reviewnumber} reviews)

                            </span>:
                            <span>
                            <StarRateIcon htmlColor={'red'} fontSize={"small"}/>({this.props.reviewnumber} reviews)

                            </span>

                            }
                        </div>

                    </div>
                    <div className="checkinCheckout">
                        <div className="checkinDiv">
                            <label className="labelsName1">Check In:
                                <input className="CheckTextBox" type="text"
                                value={this.state.check_in}
                                onChange={(e)=> this.setState({in:e.target.value})}
                                // className="check-in"
                                />  
                            </label>
                        </div>
                        <div className="checkoutDiv">
                            <label className="labelsName2">Check Out:
                                <input  className="CheckTextBox" type="text" 
                                value={this.state.check_out}
                                onChange={(e)=> this.setState({check_out:e.target.value})}
                                // className="check-out"
                                />
                            </label>
    
                        </div>

                    </div>
                    <div className="guest">
                        <label className="labelsName3">Guest:
                                <input className="CheckTextBox2" type="text" 
                                value={this.state.guest}
                                onChange={(e)=> this.setState({guest:e.target.value})}
                                />
                        </label>                       
                    </div>
                    <div className="ava">
                        {
                            this.props.currentUser ?
                            <label className="checkAvaCon">
                            <button className="checkAva" onClick={this.toggle}>Check Availability</button>
                            </label>
                            :
                            <div className="checkinGreet">
                                <GreetingContainer/>
                            </div>
                            
                        }

                    </div>
                    <div>
                        {
                            (this.state.totalToggleOn === true) ?
                            <div>
                            {
                                this.state.total > 0 ? 
                                <div className="pricing_whole_con">
                                    <div className="Pricing_con">
                                        <div className='avaSum'>
                                            Accommodation
                                        </div>
                                        <div className='avaSum2'>
                                            {(this.state.total).toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="Pricing_con">
                                        <div className='avaSum'>
                                            Cleaning Fee
                                        </div>
                                        <div className='avaSum2'>
                                            {(this.state.total*.03).toFixed(2)}
                                        </div>
                                    </div>
                               

                                    <div className="Pricing_con">
                                        <div className='avaSum'>
                                             Occupancy taxes and fee 
                                        </div>
                                        <div className='avaSum2'>
                                        {(this.state.total*.08).toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="Pricing_con">
                                        <div className='avaSum'>
                                            Total
                                        </div>
                                        <div className='avaSum2'>
                                        {(this.state.total+ this.state.total*.03 +this.state.total*.08).toFixed(2)}
                                        </div>
                                    </div>
                                  
                  

                                </div>
                                :
                                null

                            }
                            <div>

                            <label className="checkin-createbooking">
                            <button className="checkin-createbooking2" onClick={this.handleClick}>Create Booking</button>
                            </label>
                            </div>


                            </div>
                            :
                            null
                        }

                        {

                        }
                    </div>
                </div>
            </div>
        )
    }
}
