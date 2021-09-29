export const fetchListings = ()  => {
  return(  $.ajax({
        method: 'GET',
        url: '/api/listings'
    }))
};

export const fetchListing = listingid => {
    // debugger
    return(
    $.ajax({
        method: "GET",
        url: `/api/listings/${listingid}`
    }))
}
