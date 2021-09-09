import { connect } from "react-redux";
import Splash from "./splash";

const mSTP = (state) => ({
    user: state.user,
    session: state.session
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(Splash);