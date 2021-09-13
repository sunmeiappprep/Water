import { connect } from "react-redux";
import Splash from "./splash";
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
const mSTP = (state) => ({

});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Splash);