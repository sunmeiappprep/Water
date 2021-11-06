import React, { Component } from 'react'

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
                        <h1>
                            {this.props.price}/night
                        </h1>
                        <h2>
                            {this.props.avg}({this.props.reviewnumber} reviews)
                        </h2>

                    </div>
                    <div className="checkinCheckout">
                        <div className="checkinDiv">
                            <label>Check In:
                                <input type="text" size="13"
                                value={this.state.in}
                                onChange={(e)=> this.setState({in:e.target.value})}
                                // className="check-in"
                                />  
                            </label>
                        </div>
                        <div className="checkoutDiv">
                            <label>Check Out:
                                <input type="text" size="13"
                                value={this.state.out}
                                onChange={(e)=> this.setState({out:e.target.value})}
                                className="check-out"
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
                        <button onClick={this.toggle}>Check Availability</button>
                    </label>
                    </div>
                    <div>
                        {
                            (this.state.totalToggleOn === true) ?
                            <h1>Total {this.props.price * Math.floor(Math.random() * 30)}</h1>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
