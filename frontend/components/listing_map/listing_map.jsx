// import React from 'react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ img }) => <div>{img}</div>;

class ListingMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaultProps:{
        center: {
          lat: 	51.448511539411484,
          lng: -0.0999182710000223
        },
        // center: {
        //   lat: 	20.77640804978185,
        //   lng: -156.33815317456433
        // },
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
        zoom: 11,
        zoom2:3
      },

    }
  }


  
  componentDidMount(){
    this.props.fetchListings()
    const {listings,place,realterm} = this.props
    var yourVariable = realterm
    this.setState({yourVariable:this.props.realterm})

  }


  
  render() {
    

    const {listings,place,realterm} = this.props

    var yourVariable = this.props.realterm


    if ( !this.props.realterm ) return null 
    return (      
      <div className='map' style={{ height: '1200px', width: '100%' }}>
        {
          
          this.props.realterm !== "center" ?
          <GoogleMapReact
          scrollwheel={false}
          bootstrapURLKeys={{ key: "AIzaSyBEYZTBSCwCgXAotj37hPlQFfojGhLIuOU" }}
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
                  img={<Link to={`listings/${listing.id}`}><RoomIcon className="marker"/></Link>}
                  key={listing.id}
                  onclick={<Redirect to="/"/>}
                  />
                    )
                  
               })
               
          }



        </GoogleMapReact>
        :
        <GoogleMapReact
          scrollwheel={false}
          bootstrapURLKeys={{ key: "AIzaSyBEYZTBSCwCgXAotj37hPlQFfojGhLIuOU" }}
          clickableIcons={true}
          defaultCenter={this.state.defaultProps["center"]}
          defaultZoom={this.state.defaultProps.zoom2}
          // defaultZoom={"3"}
          onClick={this.testing}
        >


          {   
            listings.map((listing, i) => {
              return (
                <AnyReactComponent
                  lat={listing.latitude}
                  lng={listing.longitude}
                  img={<Link to={`listings/${listing.id}`}><RoomIcon className="marker"/></Link>}

                  key={listing.id}
                  onclick={<Redirect to="/"/>}
                  />
                    )
                  
               })
               
          }



        </GoogleMapReact>
        }
        
      </div>
    );
  }
}

export default ListingMap;