// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMapSingle extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const {listing} = this.props

    const thisProps = {
        center: {
          lat: 	listing.latitude,
          lng: listing.longitude
        },
        zoom: 13
      };
    
    
    return (      
      <div className='mapSingle' style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBEYZTBSCwCgXAotj37hPlQFfojGhLIuOU" }}
          defaultCenter={thisProps.center}
          defaultZoom={thisProps.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
        >
        <AnyReactComponent
        lat={listing.latitude}
        lng={listing.longitude}
        img={<RoomIcon className="marker"/>}
        key={listing.id}/>
                  

        </GoogleMapReact>
      </div>
    );
  }
}

export default ListingMapSingle;