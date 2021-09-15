
export const fetchUserReviews = ()  => {
    return( 
        $.ajax({
          method: 'GET',
          url: '/api/reviews/'
      }))
  };


export const fetchListingReviews = (listingId) => {
    return(
    $.ajax({
        method: 'GET',
        url: `api/reviews/${listingId}`
    }))
}

export const createReview = review => {
    return(
    $.ajax({
        method: "POST",
        url: '/api/reviews',
        data: {review}
    }))
}




