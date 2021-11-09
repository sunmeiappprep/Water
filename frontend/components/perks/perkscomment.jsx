import React, { Component } from 'react'

export default class Perkscomment extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <div className="perkcommentcon">
                <div className="perkImg">{this.props.image}</div>
                <div className="perkCommentCon2">
                    <div className="perkupperText">{this.props.upper}</div>
                    <div><br></br></div>
                    <div className="perkbottomText">{this.props.bottom}</div>
                </div>
            </div>
        )
    }
}
