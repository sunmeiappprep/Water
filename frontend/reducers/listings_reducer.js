import { RECEIVE_LISTINGS, RECEIVE_LISTING } from "../actions/listing_actions";

const ListingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTINGS:          
            return action.listings
        case RECEIVE_LISTING:
            const oneListing = {[action.listing.id]: action.listing};
            return Object.assign({}, state, oneListing)
        default:
            return state;
    }
}

export default ListingsReducer;

