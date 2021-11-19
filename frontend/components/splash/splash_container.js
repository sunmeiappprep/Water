import { connect } from "react-redux";
import Splash from "./splash";
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchListings } from '../../actions/listing_actions';

const mSTP = (state) => ({
    listings: Object.values(state.entities.listings),
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchListings: () => dispatch(fetchListings()),

});

export default connect(mSTP, mDTP)(Splash);

