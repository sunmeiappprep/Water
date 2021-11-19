// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';


const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      superreal:"",
      city:"cancun",
      defaultProps:{
        center: {
          lat: 	40.730610,
          lng: -73.935242
        },
        maui: {
          lat: 	20.7984,
          lng: 156.3319
        },
        virginia: {
          lat: 	20.7984,
          lng: 156.3319
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
          lat: 	40.8043,
          lng: 74.0121
        },
        "virginia beach": {
          lat: 	36.8529,
          lng: 75.9780
        },
        "honolulu": {
          lat: 21.3069,
          lng: 157.8583
        },
        "miami": {
          lat: 	25.806760443856547,
          lng: -80.13436802217939
        },
        zoom: 11
      },
    }
  }


  
  componentDidMount(){
    this.props.fetchListings()
    let superreal = this.props.realterm
    this.setState({superreal:superreal})
  }

  render() {
    console.log(this.props)
    
    // let lat = ""
    // let long = ""
    const {listings,place,realterm} = this.props
    // if (place.latitude){
    //   lat = place.latitude
    // }
    // if (place.longitude){
    //   long = place.longitude
    // }
    //AIzaSyBrMVK-YDcMWpVmebeqPksZs3g1MhGjotM
    // term.toLowercase()
    // console.log(this.props.cancun)
    // let superreal = ""
    // if ( this.props.realterm){
    //   superreal =this.props.realterm
    // }
    //  this.props.realterm
    // let ultrareal = ""
    // if (this.setState.superreal){
    //   ultrareal = this.setState.superreal
    // }

    // if (this.props.realterm){
    //   let asd = this.props.realterm
    //   console.log(asd)
    //   console.log(this.state.defaultProps.cancun)
    // }
    var yourVariable = this.props.realterm
    console.log(yourVariable)
      
    return (      
      <div className='map' style={{ height: '1200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyJcUgZyD8c5U1fU_8Q5JfKMDCRwdT2go" }}
          defaultCenter={this.state.defaultProps[yourVariable]}
          defaultZoom={this.state.defaultProps.zoom}
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