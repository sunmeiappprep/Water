// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { Redirect } from 'react-router';


const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaultProps:{
        center: {
          lat: 	40.730610,
          lng: -73.935242
        },
        maui: {
          lat: 	20.77640804978185,
          lng: -156.33815317456433
        },
        "virginia beach": {
          lat: 	36.822828527515185,
          lng:  -76.09094131087141
        },
        cancun: {
          lat: 	21.161312209604535,
          lng: -86.82624108472126
        },
        "renaissance island": {
          lat: 	12.505347176750035,
          lng:  -70.02535357453823
        },
        "north bergen": {
          lat: 	40.799561116844544,
          lng:  -74.00578321717434
        },
        "honolulu": {
          lat: 21.361275740929333,
          lng:  -157.84336399720002
        },
        "miami": {
          lat: 	25.806760443856547,
          lng: -80.13436802217939
        },
        "phuket": {
          lat: 7.861337697551124,
          lng:  98.40059249307171,
        },
        zoom: 11
      },
    }
  }


  testing(e){
    console.log(e)
  }
  
  componentDidMount(){
    this.props.fetchListings()
  }

  render() {
    console.log(this.props)
    

    const {listings,place,realterm} = this.props

    var yourVariable = this.props.realterm
    console.log(yourVariable)
    console.log(this.state.defaultProps[yourVariable])
      
    return (      
      <div className='map' style={{ height: '1200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyJcUgZyD8c5U1fU_8Q5JfKMDCRwdT2go" }}
          clickableIcons={true}
          defaultCenter={this.state.defaultProps[yourVariable]}
          defaultZoom={this.state.defaultProps.zoom}
          onClick={this.testing}
        >
          {   
            listings.map((listing, i) => {
              return (
                <AnyReactComponent
                  lat={listing.latitude}
                  lng={listing.longitude}
                  img={<RoomIcon className="marker"/>}
                  key={listing.id}
                  onclick={<Redirect to="/"/>}
                  />
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