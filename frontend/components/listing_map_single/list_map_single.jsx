// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';


const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMapSingle extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.fetchListing()
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
          bootstrapURLKeys={{ key: "AIzaSyDyJcUgZyD8c5U1fU_8Q5JfKMDCRwdT2go" }}
          defaultCenter={thisProps.center}
          defaultZoom={thisProps.zoom}
        >
        <AnyReactComponent
        lat={listing.latitude}
        lng={listing.longitude}
        img={<RoomIcon className="marker"/>}
        key={listing.id}/>
                  
           
               
          

          {/* <AnyReactComponent
            lat={40.730610}
            lng={-73.935242}
            img={<RoomIcon className="marker"/>}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default ListingMapSingle;