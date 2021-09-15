import { connect } from 'react-redux';
import Booking from './booking';
import { fetchBookings } from '../../actions/booking_actions'
import { removeBooking } from '../../actions/booking_actions'


const mSTP = (state = {}) =>({    
    bookings: Object.values(state.entities.bookings),
    currentUser:Object.values(state.entities.users)
})

const mDTP = dispatch => ({

    fetchBookings: (bookingId) => dispatch(fetchBookings(bookingId)),
    removeBooking: (bookingId) => dispatch(removeBooking(bookingId))   

})

export default connect(mSTP, mDTP)(Booking);