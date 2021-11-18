import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from '../actions/review_actions';


const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews)
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review})
        case REMOVE_REVIEW:
            let nextState = Object.assign({}, state)
            delete nextState[action.reviewId]
            return nextState;
        default:
            return state;
    }
}

export default ReviewsReducer;