import { connect } from 'react-redux';
import ReviewForm from './review_form'
import {createReview} from '../../actions/review_actions'
createReview

const mSTP = (state, ownProps) => (
    {
    state: state,
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
})

export default connect(mSTP, mDTP)(ReviewForm);