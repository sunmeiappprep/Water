import { connect } from 'react-redux';
import ListingMapSingle from './list_map_single';
import { fetchListing } from '../../actions/listing_actions'


const mSTP = (state = {},ownProps) =>({        
})

const mDTP = dispatch => ({
    fetchListing: () => dispatch(fetchListing())   
})

export default connect(mSTP, mDTP)(ListingMapSingle);