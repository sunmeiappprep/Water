import React from 'react';
import Text from 'react'
import Cardsmall from './cardsmall.jpg'
// import listing_index_container from '../listings_index/listing_index_container';
class Card extends React.Component {

    render() {
        const text = `${this.props.name} \n` ;
        const text2 = `${this.props.drive} Hour Drive`
        return (
            <div className="card">
                <img className='card2' src={this.props.site} alt="cardsmall" />
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