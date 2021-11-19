import React from 'react';
import Text from 'react'
import Cardsmall from './cardsmall.jpg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import listing_index_container from '../listings_index/listing_index_container';
class Card extends React.Component {

    render() {
        const text = `${this.props.name} \n` ;
        const text2 = `${this.props.drive} Hour Drive`
        const filtercity = `${this.props.name}`
        const lag = {
            center: {
              lat: 	36.2048,
              lng: 138.2529
            },
            zoom: 10
          };

        return (
            <div className="card">
            <Link to={
    { 
        pathname: "/listings",
        filtercity: {filtercity},
        
    }
}>
    <img className='card2' src={this.props.site}  alt="cardsmall" />
</Link>
                {/* <Link to="/listings" filtercity={filtercity} > <img className='card2' src={this.props.site}  alt="cardsmall" /></Link> */}
                
                <div className='test'> 
                    <div 
                    className="upperText">{text} 
                    </div>
                    <div>
                    <div className="lowerText"> {text2}</div>
                    </div>
                   
                </div>
                
               {/* <listing_index_container testing = "asd"/> */}

            </div>
        )
    }
}

export default Card;