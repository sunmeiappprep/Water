import { connect } from 'react-redux';
import ReviewShow from './reviewShow';
import { fetchListing } from '../../actions/listing_actions';
import { fetchListingReviews,deleteReview } from '../../actions/review_actions';


const mSTP = (state, ownProps) => (
    {
    
});

const mDTP = dispatch => ({
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),


})

export default connect(mSTP, mDTP)(ReviewShow);