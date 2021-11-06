import React, { Component } from 'react'

export default class Perks extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomPerks:[
                ["Enchance Clean",
                "This Host committed to Airbnb's 5-step enhanced cleaning process."],
            ],
            gotFiveStar:[
                ["Great location",
                "100% of recent guests gave the location a 5-star rating."],
                ["Great check-in experience",
                "100% of recent guests gave the check-in process a 5-star rating."],
            ],
            standard:[
                ["Entire home",
                "You’ll have the treehouse to yourself."],
                ["Dope","This is dope sub"]
            ],
        }
    }

    render() {
        return (
            <div>
                {this.state.standard[0][0]}
                {this.state.standard[0][1]}

                {
                    (this.props.avgRating === 5) ?
                    <div>
                    <h2>{this.state.gotFiveStar[0][0]}</h2>
                    <h6>{this.state.gotFiveStar[0][1]}</h6>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}
