import React from 'react';
// import Text from 'react'
// import logo from './ss.jpg';
// ...later

class Map extends React.Component {


    render() {
        // const text = 'Unique Stays';
        return (
        <div className="rightside">
        <iframe
        width="600"
        height="450"
        style="border:0"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3wLaK59L-lhDyy87oZ4XaGYTWTou1nx8&q=Space+Needle,Seattle+WA">
        </iframe>

        </div>
        )
    }
}

export default Map;