import { connect } from "react-redux";
import Show from "./show";

const mSTP = (state) => {
    return {
        email: state.email
    };
};

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(Show);