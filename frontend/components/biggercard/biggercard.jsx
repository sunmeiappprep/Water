import React from 'react';
// import Text from 'react'
import logo from './ss.jpg';
// ...later
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
// import { NavLink } from 'react-router-dom';
class Biggercard extends React.Component {

    render() {
        const text = this.props.category;
        // let string = `/listings/${this.prop.listingId}`
        return (
            <div className="biggercard">
                <NavLink to={`/listings/${this.props.listingId}`} className='midLink'><img className='biggercard2' src={this.props.site} alt="logo" /></NavLink> 
                
                <p className="display-linebreak2"> 
                    {text} 
                </p>
               

            </div>
        )
    }
}

export default Biggercard;