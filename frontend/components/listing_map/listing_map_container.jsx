import { connect } from 'react-redux';
import ListingMap from './listing_map';
import { fetchListings } from '../../actions/listing_actions'


const mSTP = (state = {}) =>({    
    listings: Object.values(state.entities.listings),
    // filtercity: Object.values(state.filtercity)
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())   
})

export default connect(mSTP, mDTP)(ListingMap);