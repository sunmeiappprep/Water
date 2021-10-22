import { connect } from 'react-redux';
import ReviewForm from './review_form'
import {createReview,updateReview,deleteReview} from '../../actions/review_actions'
createReview

const mSTP = (state, ownProps) => (
    {
    state: state,
    currentUser: state.session.id,
    users:Object.values(state.entities.users)
});



const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    
    
})

export default connect(mSTP, mDTP)(ReviewForm);