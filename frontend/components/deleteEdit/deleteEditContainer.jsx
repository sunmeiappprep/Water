import { connect } from 'react-redux';
import DeleteEdit from './deleteEdit';
import { fetchListing } from '../../actions/listing_actions';
import { fetchListingReviews,deleteReview } from '../../actions/review_actions';


const mSTP = (state, ownProps) => (
    {
    
});

const mDTP = dispatch => ({
    fetchListing: listingid => dispatch(fetchListing(listingid)),
    fetchListingReviews: listingId => dispatch(fetchListingReviews(listingId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),

})

export default connect(mSTP, mDTP)(DeleteEdit);