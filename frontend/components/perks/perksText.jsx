import React, { Component } from 'react'

export default class PerksText extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div className="one-perk-container">
                <div className="perksicons"><img src={this.props.image} height="24px" width="24px" alt="" /></div>
                <div className="perktext">
                    <div  className="perkuppertext">{this.props.upper}</div>
                    <div  className="perklowertext">{'   '}{this.props.lower}</div>
                </div>  
            </div>
        )
    }
}
