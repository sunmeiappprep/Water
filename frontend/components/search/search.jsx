import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Router, Switch, Route } from "react-router-dom";
import ListingsIndexContainer from '../listings_index/listing_index_container';
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: "",
            search: false,
        }
    }


    componentDidMount(){
        this.props.fetchListings()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ "search": true },()=> window.location.reload());


        


    }   
    
    handleKeypress(e) {
        if (e.key === "Enter") this.handleSubmit(e);

    };

    componentDidUpdate(pP,pS) {
        if (this.state.search) this.setState({search: false})

    }

    render() {
        // console.log(this.props.listings)
        // console.log(this.state.term)

        return (
            <div className="search_bar">       
                <input className="search-input"
                    type="search"
                    onChange={(e)=> this.setState({term:e.target.value})}
                    onKeyPress={(e) => this.handleKeypress(e)}
                    placeholder="Miami,Cancun,Virginia Beach,Honolulu,Phuket,Virginia Beach"
                />
           
        
           <button 
                    className="search-icon-button" 
                    onClick={(e) => this.handleSubmit(e)}
            >
                    <SearchIcon />
            </button>


            {
            this.state.search ? 
                 <Redirect to={{
                    pathname: '/search',
                    search: "?" + this.state.term,
            }} /> : null}


           

         </div>
        )
    }
}

export default Search;