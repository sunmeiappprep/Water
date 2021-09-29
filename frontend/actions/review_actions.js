import * as ReviewUtils from '../util/review_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

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

export const fetchUserReviews = () => dispatch => (
    ReviewUtils.fetchUserReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchListingReviews = listingId => dispatch => {
    debugger
    return (
    
    ReviewUtils.fetchListingReviews(listingId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)}

export const fetchSingleReview = reviewId => dispatch => (
    ReviewUtils.fetchSingleReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => {
    return(
    ReviewUtils.createReview(review)
    .then(review => dispatch(receiveReview(review)), 
    err => (dispatch(receiveReviewErrors(err.responseJSON)))))
}

export const updateReview = review => dispatch => (
    ReviewUtils.updateReview(review)
    .then(review => dispatch(receiveReview(review)),
    err => (dispatch(receiveReviewErrors(err.responseJSON))))
)

export const deleteReview = reviewId => dispatch => (
    ReviewUtils.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)