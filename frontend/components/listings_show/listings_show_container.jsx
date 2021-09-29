import { connect } from 'react-redux';
import ListingShow from './listings_show';
import { fetchListing } from '../../actions/listing_actions';
import { fetchListingReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => (
    {
    listing: state.entities.listings[ownProps.match.params.listingid],
    currentUser: state.session.id,
    reviews: state.entities.reviews[ownProps.match.params.listingid]
    
});

const mDTP = dispatch => ({
    fetchListing: listingid => dispatch(fetchListing(listingid)),
    fetchListingReviews: listingId => dispatch(fetchListingReviews(listingId))  
})

export default connect(mSTP, mDTP)(ListingShow);