import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Router, Switch, Route } from "react-router-dom";
import ListingIndexItem from '../listings_index/listing_index_item';
import {Link} from 'react-router-dom'
import Modal from '../modal/modal';
import Logo from '../splash/logo.png'
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
import ListingMapContainer from '../listing_map/listing_map_container';
import { NavLink } from 'react-router-dom';
import Nav from '../nav/nav';
import 'regenerator-runtime/runtime'

class SearchIndex extends React.Component {

    


    constructor(props){
        super(props);
        this.state = {
            listings:[],
            filter:[],
            realterm:"",
            windows:""
        }
    }

    componentDidUpdate(){
        if (!this.state.realterm){
            const {listings,location} = this.props;  
        let que = window.location.href.split("?")
        this.setState({que:que})
        let realterm;
        let filter = []

        if(que.length >= 2){
            realterm = que[1].split("%20").join(" ").toLowerCase()
            for (let x = 0 ; x  < listings.length ; x++){
                if (listings[x].city.toLowerCase() === realterm.toLowerCase())
                filter.push(listings[x])
            }
        }else{
            for (let x = 0 ; x  < listings.length ; x++){
                filter.push(listings[x])
                realterm = "center"
            }
        }

        let listing2 =[]

        // }
        if(this.state.realterm !== realterm){
            this.setState({realterm:realterm})
        }

        this.setState({filter:filter})
        }
        
    }

    render(){
        // const {listings,location} = this.props;  
        // let que = window.location.href.split("?")
        // let realterm;
        // let filter = []

        // if(que.length >= 2){
        //     realterm = que[1].split("%20").join(" ").toLowerCase()
        //     for (let x = 0 ; x  < listings.length ; x++){
        //         if (listings[x].city.toLowerCase() === realterm.toLowerCase())
        //         filter.push(listings[x])
        //     }
        // }else{
        //     for (let x = 0 ; x  < listings.length ; x++){
        //         filter.push(listings[x])
        //         realterm = "center"
        //     }
        // }

        // let listing2 =[]

        // }
        // console.log(this.state)
        // console.log(this.props)   

        // console.log(this.state.filter)
        let capTerm;
        if (this.state.realterm){
            capTerm = this.state.realterm.charAt(0).toUpperCase() + this.state.realterm.slice(1)
        }
        return(            
            <div className="listings-index-box">
                <div className='fixedNav'>
                    <Nav/>
                </div>
                    
                <div className="index-listing-con">
                    <div className='index-left'>
                    <h1 className="place-holderstay">Placeholder Stays</h1>
                    {
                        this.state.realterm === "center" && this.state.filter.length !== 0?
                        <h1 className="every-listing">Every Listings</h1>
                        : this.state.filter.length !== 0 ?
                        <h1 className="every-listing">Results for {capTerm} </h1>
                        : null


                    }
                    {
                        this.state.filter.length === 0 ?
                        <h1 className="every-listing">Sorry there are no listing for {capTerm}</h1>
                        :
                        null
                    }
                            <ul className="">
                                {   
                                    this.state.filter.map((listing, i) => (
                                    <Link key ={i} to={`/listings/${listing.id}`} > 
                                    <ListingIndexItem listing= {listing}  key={listing.id}/>
                                    </Link>
                                    ))
                                }
                            </ul>   
                    </div>                 
                <div className='index-right'>
                    <ListingMapContainer realterm={this.state.realterm} />
                </div>      
                </div>               
                
            </div>
        )
    }


}

export default SearchIndex;