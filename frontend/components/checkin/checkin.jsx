import React, { Component } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';

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
    }

    // componentWillMount() {     
    //     let arr = [];
    //     let bookings = {}
    //     this.props.fetchBookings().then(bookings => this.setState({bookings})).then(() =>{
    //         for (let x = 0; x < this.state.bookings.bookings.length; x++){
    //             if (this.state.bookings.bookings[x].renter.id === this.props.currentUser[0].id){
    //                 arr.push(this.state.bookings.bookings[x])
    //             }
    //         }
    //         console.log(arr)

    //     }).then(()=>{
    //         bookings:
    //         this.setState({bookings:arr})
    //     })
    //     // let bk = this.state.bookings.bookings;
        
    // }
    
    handleClick(e) {
        e.preventDefault()
        // console.log(e)
        const booking2 = {
            check_in:this.state.check_in,
            check_out:this.state.check_out,   
            renter_id:this.props.currentUser,   
            listing_id:this.props.listingId,

            
        }        
        console.log(booking2)

        this.props.createBooking(booking2);
        window.location.reload()

    }


    convertFormatIn(dateString){
        let x = dateString.split("/")
        let mmddyyyy = x[1]+"/"+x[0]+"/"+x[2]
        // console.log(mmddyyyy)
        this.setState({checkinMMDDYYYY:mmddyyyy})
        // this.diffDateFun()
    }

    convertFormatOut(dateString){
        let y = dateString.split("/")
        let mmddyyyy = y[1]+"/"+y[0]+"/"+y[2]
        // console.log(mmddyyyy)
        this.setState({checkoutMMDDYYYY:mmddyyyy})
        // this.diffDateFun()
    }

    componentDidUpdate(pP,Ps){
        // console.log(pP.check_out,this.props.check_out)
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
        // let total = Math.floor(this.props.price * Difference_In_Days)
        this.setState({total:total})
    }   

    render() {

        // console.log(this.props)
        // console.log((this.state.dateDiff))
        // console.log()
    //   setInterval(() => {
    //   console.log(this.state.bookings.bookings)
        
    //   }, 1000);


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
                            <label>Check In:
                                <input className="CheckTextBox" type="text"
                                value={this.state.check_in}
                                onChange={(e)=> this.setState({in:e.target.value})}
                                // className="check-in"
                                />  
                            </label>
                        </div>
                        <div className="checkoutDiv">
                            <label>Check Out:
                                <input  className="CheckTextBox" type="text" 
                                value={this.state.check_out}
                                onChange={(e)=> this.setState({check_out:e.target.value})}
                                // className="check-out"
                                />
                            </label>
    
                        </div>

                    </div>
                    <div className="guest">
                        <label>Guest:
                                    <input type="text" 
                                    value={this.state.guest}
                                    onChange={(e)=> this.setState({guest:e.target.value})}
                                    className="guest"
                                    />
                        </label>                       
                    </div>
                    <div className="ava">
                    <label>
                        <button className="checkAva" onClick={this.toggle}>Check Availability</button>
                    </label>
                    </div>
                    <div>
                        {
                            (this.state.totalToggleOn === true) ?
                            <div>
                            <div className="avaSum">Total {this.state.total}</div>
                            <div>

                            <label>
                            Submit
                            <button  onClick={this.handleClick}>Create Booking</button>

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
