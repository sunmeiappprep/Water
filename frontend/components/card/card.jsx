import React from 'react';
import Text from 'react'
import Cardsmall from './cardsmall.jpg'
class Card extends React.Component {

    render() {
        const text = 'Hawaii \n 7.5 Hour Flight';
        return (
            <div className="card">
                <img className='card2' src={Cardsmall} alt="cardsmall" />
                <p className="display-linebreak"> 
                    {text} 
                </p>
               

            </div>
        )
    }
}

export default Card;