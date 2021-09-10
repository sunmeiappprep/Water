import { connect } from 'react-redux';
import ListingShow from './listings_show';
import { fetchListing } from '../../actions/listing_actions';


const mSTP = (state, ownProps) => (
    {
    listing: state.entities.listings[ownProps.match.params.listingid],
    currentUser: state.session.id,
    
});

const mDTP = dispatch => ({
    fetchListing: listingid => dispatch(fetchListing(listingid))   
})

export default connect(mSTP, mDTP)(ListingShow);