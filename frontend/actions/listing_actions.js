import * as ListingUtils from '../util/listing_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings 
})

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing 
})


export const fetchListings = () => dispatch => {
    return(
    ListingUtils.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
    )
};

export const fetchListing = listingid => dispatch => {
    return(
    ListingUtils.fetchListing(listingid)
    .then(listing => dispatch(receiveListing(listing)))
    )
};

