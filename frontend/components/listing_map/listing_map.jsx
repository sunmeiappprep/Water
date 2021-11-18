// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';


const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMap extends Component {
  constructor(props){
    super(props);
  }

  static defaultProps = {
    center: {
      lat: 	40.730610,
      lng: -73.935242
    },
    zoom: 3
  };
  
  componentDidMount(){
    this.props.fetchListings()
  }

  render() {
 
    
    // let lat = ""
    // let long = ""
    const {listings,place} = this.props
    // if (place.latitude){
    //   lat = place.latitude
    // }
    // if (place.longitude){
    //   long = place.longitude
    // }
    //AIzaSyBrMVK-YDcMWpVmebeqPksZs3g1MhGjotM
    
    return (      
      <div className='map' style={{ height: '1200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyJcUgZyD8c5U1fU_8Q5JfKMDCRwdT2go" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {   
            listings.map((listing, i) => {
              return (
                <AnyReactComponent
                  lat={listing.latitude}
                  lng={listing.longitude}
                  img={<RoomIcon className="marker"/>}
                  key={listing.id}/>
                  
                    )
                  
               })
               
          }


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

export default ListingMap;