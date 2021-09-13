import React from 'react';
// import Text from 'react'
import logo from './ss.jpg';
// ...later

class Biggercard extends React.Component {

    render() {
        const text = this.props.category;
        return (
            <div className="biggercard">
                <img className='biggercard2' src={this.props.site} alt="logo" />
                <p className="display-linebreak2"> 
                    {text} 
                </p>
               

            </div>
        )
    }
}

export default Biggercard;