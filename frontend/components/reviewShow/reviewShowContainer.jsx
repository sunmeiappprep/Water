import { connect } from 'react-redux';
import ReviewShow from './reviewShow';
import { fetchListing } from '../../actions/listing_actions';
import { fetchListingReviews,deleteReview,updateReview } from '../../actions/review_actions';


const mSTP = (state, ownProps) => (
    {
    
});

const mDTP = dispatch => ({
    
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review)),



})

export default connect(mSTP, mDTP)(ReviewShow);