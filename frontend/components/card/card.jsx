import React from 'react';
import Text from 'react'
import Cardsmall from './cardsmall.jpg'
class Card extends React.Component {

    render() {
        const text = 'Hawaii \n ';
        const text2 = '7.5 Hour Drive'
        return (
            <div className="card">
                <img className='card2' src={Cardsmall} alt="cardsmall" />
                <div className='test'> 
                    <section className="upperText">{text} </section>
                    <div>
                        <section className="lowerText"> {text2}</section>
                    </div>
                   
                </div>
                
               

            </div>
        )
    }
}

export default Card;