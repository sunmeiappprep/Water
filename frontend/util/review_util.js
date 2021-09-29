export const fetchUserReviews = () => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/`
    })
)

export const fetchListingReviews = (listingId) => {
    // debugger
    return(
    $.ajax({
        method: 'GET',
        url: `api/reviews/${listingId}`
    }))
}

export const createReview = review => (
    $.ajax({
        method: "POST",
        url: '/api/reviews',
        data: {review}
    })
)

export const updateReview = review => (
    $.ajax({
        method: "PATCH",
        url: `/api/reviews/${review.id}`,
        data: {review}
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        method: "DELETE",
        url: `/api/reviews/${reviewId}`
    })
)