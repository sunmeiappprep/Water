import React, { Component } from 'react'

export default class Perks extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomPerks:[
                ["Enchance Clean",
                "This Host committed to Airbnb's 5-step enhanced cleaning process."],
                ["Self check-in",
                "Check yourself in with the keypad."],
                ["Great check-in experience",
                "100% of recent guests gave the check-in process a 5-star rating."],
            ],
            gotFiveStar:[
                ["Great location",
                "100% of recent guests gave the location a 5-star rating."],
                ["Great check-in experience",
                "100% of recent guests gave the check-in process a 5-star rating."],
                
            ],
            standard:[
                ["Entire home",
                "You’ll have the place to yourself."],
            ],
        }
    }

    render() {
        // console.log(this.props.avgRating)
        // console.log(typeof(this.props.avgRating))
        return (
            <div>
                <h2>
                {this.state.standard[0][0]}

                </h2>
                <h6>
                {this.state.standard[0][1]}

                </h6>
                {
                    (parseInt(this.props.avgRating) >= 4.5) ?
                    <div>
                    <h2>{this.state.gotFiveStar[0][0]}</h2>
                    <h6>{this.state.gotFiveStar[0][1]}</h6>
                    </div>
                    :
                    null
                }
                <h2>{this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][0]}</h2>
                <h6>
                {this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][1]}
                </h6>
                {/* <h2>
                {this.state.randomPerks[(this.props.listingId+1%this.state.randomPerks.length)][0]}
                </h2>
                <h6>
                    {this.state.randomPerks[(this.props.listingId+1%this.state.randomPerks.length)][1]}
                </h6> */}
            </div>
        )
    }
}
