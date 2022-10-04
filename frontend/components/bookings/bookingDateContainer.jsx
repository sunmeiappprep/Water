import { connect } from 'react-redux';
import BookingDate from './bookingDate';
import { createBooking } from '../../actions/booking_actions'
import { fetchBookings } from '../../actions/booking_actions'
import { removeBooking } from '../../actions/booking_actions'

const mSTP = (state = {}) =>({    
    currentUser: state.session.id
    
})

const mDTP = dispatch => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchBookings: (bookingId) => dispatch(fetchBookings(bookingId)),
    removeBooking: (bookingId) => dispatch(removeBooking(bookingId))   
})

export default connect(mSTP, mDTP)(BookingDate);