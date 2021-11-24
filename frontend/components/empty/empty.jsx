import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
class Empty extends React.Component {

    searchAll(){
        <Redirect to={{
            pathname: '/search',
            search: "?" + "",   
        }} />
    }

    render() {
        return (
            <div className="empty" width="500" height="500">
                {/* <Link to="/"><img className='logo' src={'https://water-seeds.s3.amazonaws.com/logo.png'} alt="cardsmall"/></Link>  */}
                {/* <button className="splash_button">Search for all listing</button> */}
                <img src="" width="1" height="800" alt=""
            />
            </div>
        )
    }
}

export default Empty;