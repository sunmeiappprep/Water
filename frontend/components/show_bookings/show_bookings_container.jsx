import { connect } from 'react-redux';

import ShowBookings from './show_bookings';
const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
//   openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ShowBookings)