import React, { Component } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';

export default class Checkin extends Component {
    constructor(props){
        super(props)
        this.state = {
            totalToggleOn:false,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(e){
        e.preventDefault()
        if (this.state.totalToggleOn === false){
            this.setState({totalToggleOn:true})
        }
        else{
            this.setState({totalToggleOn:false})
        }
    }   

    render() {
        console.log(this.state.totalToggleOn)
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
                            <StarRateIcon htmlColor={'red'} fontSize={"small"}/>{this.props.avg}({this.props.reviewnumber} reviews)
                        </div>

                    </div>
                    <div className="checkinCheckout">
                        <div className="checkinDiv">
                            <label>Check In:
                                <input className="CheckTextBox" type="text"
                                value={this.state.in}
                                onChange={(e)=> this.setState({in:e.target.value})}
                                // className="check-in"
                                />  
                            </label>
                        </div>
                        <div className="checkoutDiv">
                            <label>Check Out:
                                <input  className="CheckTextBox" type="text" 
                                value={this.state.out}
                                onChange={(e)=> this.setState({out:e.target.value})}
                                // className="check-out"
                                />
                            </label>
    
                        </div>

                    </div>
                    <div className="guest">
                        <label>Guest:
                                    <input type="text" 
                                    value={this.state.out}
                                    onChange={(e)=> this.setState({out:e.target.value})}
                                    className="guest"
                                    />
                        </label>                       
                    </div>
                    <div className="ava">
                    <label>
                        Submit
                        <button className="checkAva" onClick={this.toggle}>Check Availability</button>
                    </label>
                    </div>
                    <div>
                        {
                            (this.state.totalToggleOn === true) ?
                            <div className="avaSum">Total {this.props.price * Math.floor(Math.random() * 30)}</div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
