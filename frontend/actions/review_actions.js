import * as ReviewUtils from '../util/review_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const REVIEW_ERRORS = "REVIEW_ERRORS";


const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

const reviewErrors = errors => ({
    type: REVIEW_ERRORS,
    errors
})

export const fetchUserReviews = () => dispatch => (
    ReviewUtils.fetchUserReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchListingReviews = listingId => dispatch => {
    return (
    
    ReviewUtils.fetchListingReviews(listingId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)}


export const createReview = review => dispatch => {
    return(
    ReviewUtils.createReview(review)
    .then(review => dispatch(receiveReview(review)), 
    err => (dispatch(reviewErrors(err.responseJSON)))))
}

export const updateReview = review => dispatch => (
    ReviewUtils.updateReview(review)
    .then(review => dispatch(receiveReview(review)),
    err => (dispatch(reviewErrors(err.responseJSON))))
)

export const deleteReview = reviewId => dispatch => (
    ReviewUtils.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)