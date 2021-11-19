import { connect } from 'react-redux';
import React from 'react';
import SearchIndex from './search_index';
import { fetchListings } from '../../actions/listing_actions';

const mSTP = state => {
    return {
        listings: Object.values(state.entities.listings),
    }
}

const mDTP = dispatch => {
    return {
        fetchListings: () => dispatch(fetchListings()),
    }
}

export default connect(mSTP, mDTP)(SearchIndex);