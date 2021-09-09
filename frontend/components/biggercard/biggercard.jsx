import React from 'react';
// import Text from 'react'
import logo from './ss.jpg';
// ...later

class Biggercard extends React.Component {

    render() {
        const text = 'Unique Stays';
        return (
            <div className="biggercard">
                {/* <img src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320" width="350" height="350" alt="" /> */}
                <img className='biggercard2' src={logo} alt="logo" />
                <p className="display-linebreak2"> 
                    {text} 
                </p>
               

            </div>
        )
    }
}

export default Biggercard;