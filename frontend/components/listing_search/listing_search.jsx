import React from 'react';
// import ListingSearchItem from './listing_search_items';
import {Link} from 'react-router-dom'
import Modal from '../modal/modal';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer  from '../search/search_container';
class ListingSearch extends React.Component {
    constructor(props){
        super(props);
    }

    

    componentDidMount() {        
        this.props.fetchListings();
    }

    render(){
        const {listings} = this.props;        
        if (!listings) return null;
        return(            
            <div className="listings-index-box">
                <div className='navbar-1'>
                <div className="navbar00">
                    <section className="navbar"> 
                    <Modal />           
                    <Link to="/"><img className='logo' src={Logo} alt="cardsmall"/></Link>
                    <section className='midLinkBundle'>
                    <SearchContainer/>

                {/* <Link to="/" className='midLink'>Places to stay</Link>
                <Link to="/" className='midLink'>Experiences</Link>
                <Link to="/" className='midLink'>Online Experiences</Link> */}
                 </section>
          
            {/* <Modal></Modal> */}
            <GreetingContainer className="greeting_container"/>
            {/* <Modal isOpen={true}>
              <h5>asd</h5>
              <p>asdasd</p>
            </Modal> */}
           
           
        </section>

            </div>
            <div className="search_container">
            </div>     
                </div>
                           
                <h2 className="main-index-title">All Listings</h2>
                    <ul className="list-indexes">
                        {
                            listings.map((listing, i) => (
                                <ListingIndexItem 
                                    listing= {listing}
                                    key={listing.id}
                                />
                            //link dont work
                            //     <Link key ={i} to={`/listings/${listing.id}`} style={{ textDecoration: 'none' }}> <ListingIndexItem 
                            //     listing= {listing}
                            //     key={listing.id}
                            // />
                            // </Link>
                            ))
                        }
                    </ul>
            </div>
        )
    }


}

export default ListingSearch;
