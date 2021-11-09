import React, { Component } from 'react'
import Perkscomment from './perkscomment'
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CheckIcon from '@mui/icons-material/Check';
export default class Perks extends Component {
    constructor(props){
        super(props)
        this.state = {
            randomPerks:[
                ["Enchance Clean",
                "This Host committed to Airbnb's 5-step enhanced cleaning process.",
                <CleaningServicesIcon/>,
                ],
                ["Self check-in",
                "Check yourself in with the keypad.",
                <KeyboardIcon/>],
                ["Great check-in experience",
                "100% of recent guests gave the check-in process a 5-star rating.",
                <CheckIcon/>],
            ],
            gotFiveStar:[
                ["Great location",
                "100% of recent guests gave the location a 5-star rating.",
                <LocationOnIcon/>],
                ["Great check-in experience",
                "100% of recent guests gave the check-in process a 5-star rating.",
                <StarIcon/>],
                
            ],
            standard:[
                ["Entire home",
                "You’ll have the place to yourself.",
                <HomeIcon/>],
            ],
        }
    }

    render() {
        // console.log(this.props.avgRating)
        // console.log(typeof(this.props.avgRating))
        return (
            <div>
                <Perkscomment
                image={this.state.standard[0][2]}
                upper={this.state.standard[0][0]}
                bottom={this.state.standard[0][1]}
                />
                {/* <h2>
                {this.state.standard[0][0]}
                
                </h2>
                <h6>
                {this.state.standard[0][1]}

                </h6> */}
                
                {
                    (parseInt(this.props.avgRating) >= 4.5) ?
                    <div>
                        <Perkscomment
                        image={this.state.gotFiveStar[0][2]}
                        upper={this.state.gotFiveStar[0][0]}
                        bottom={this.state.gotFiveStar[0][1]}
                        />
                        <Perkscomment
                        image={this.state.gotFiveStar[1][2]}
                        upper={this.state.gotFiveStar[1][0]}
                        bottom={this.state.gotFiveStar[1][1]}
                        />
                    </div>
                    :
                    null
                }
                <Perkscomment
                    image={this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][2]}
                    upper={this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][0]}
                    bottom={this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][1]}
                
                />
                {/* <h2>{this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][0]}</h2>
                <h6>
                {this.state.randomPerks[this.props.listingId%this.state.randomPerks.length][1]}
                </h6> */}
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
