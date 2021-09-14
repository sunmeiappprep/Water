// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
// debugger

const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMapSingle extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchListing()
  }

  render() {
    const {listing} = this.props

    const thisProps = {
        center: {
          lat: 	listing.latitude,
          lng: listing.longitude
        },
        zoom: 20
      };
    
    
    return (      
      <div className='map' style={{ height: '1000px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={thisProps.center}
          defaultZoom={thisProps.zoom}
        >
        {console.log(listing.latitude)}
        <AnyReactComponent
        lat={listing.latitude}
        lng={listing.longitude}
        img={<RoomIcon className="marker"/>}
        key={listing.id}/>
                  
           
               
          

          {/* {console.log(this.props.listing.photo)} */}
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