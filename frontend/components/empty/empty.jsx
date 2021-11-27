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
            <div className="empty" width="500px" height="500px">
                <div className="greetingswithbutton" width="500px" height="500px">
                    <div>
                    <img className='logo3' src={"https://i.imgur.com/qSaKqmx.jpeg"} height="500px" alt="cardsmall"/>

                    </div>
                    <div>
                    <Link to="/search"><button className='redirectoAll'>Ready to travel the world?</button></Link>
                        
                    </div>
                </div>
                    
             
                {/* <button className="splash_button">Search for all listing</button> */}
                {/* <img src="" width="1" height="800" alt=""
            /> */}
            </div>
        )
    }
}

export default Empty;