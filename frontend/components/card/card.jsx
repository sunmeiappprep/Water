import React from 'react';
import Text from 'react'
import Cardsmall from './cardsmall.jpg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import listing_index_container from '../listings_index/listing_index_container';
class Card extends React.Component {

    render() {
        console.log("asd")
        const text = `${this.props.name} \n` ;
        const text2 = `${this.props.drive} Hour Drive`
        const filtercity = `${this.props.name}`
        return (
            <div className="card">
            <Link to={
    { 
        pathname: "/listings",
        filtercity: {filtercity},
        // testing = 5,
    }
}>
    <img className='card2' src={this.props.site}  alt="cardsmall" />
</Link>
                {/* <Link to="/listings" filtercity={filtercity} > <img className='card2' src={this.props.site}  alt="cardsmall" /></Link> */}
                
                <div className='test'> 
                    <section className="upperText">{text} </section>
                    <div>
                        <section className="lowerText"> {text2}</section>
                    </div>
                   
                </div>
                
               {/* <listing_index_container testing = "asd"/> */}

            </div>
        )
    }
}

export default Card;