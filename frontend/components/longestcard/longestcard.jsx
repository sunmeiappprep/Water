import React from 'react';
import Text from 'react'
import longestcard from './longestcard2.jpg'
class Longestcard extends React.Component {

    render() {       
        return (
            <div className="Longestcarddiv">
                
                <img className='Longestcard' src={longestcard} alt="Long" />
            </div>
        )
    }
}

export default Longestcard;