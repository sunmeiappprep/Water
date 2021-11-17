import { connect } from 'react-redux'
import BookingIndexItem from './booking_index_item'
import { createBooking } from '../../actions/booking_actions'
import { fetchBookings } from '../../actions/booking_actions'
import { removeBooking } from '../../actions/booking_actions'
import {updateBooking} from '../../actions/booking_actions'

const mSTP = (state = {}) =>({    
    // bookings: Object.values(state.entities.bookings),
    // currentUser:Object.values(state.entities.users)
    currentUser: state.session.id
    
})

const mDTP = dispatch => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchBookings: (bookingId) => dispatch(fetchBookings(bookingId)),
    removeBooking: (bookingId) => dispatch(removeBooking(bookingId)),   
    updateBooking: (booking) => dispatch(updateBooking(booking))   

})

export default connect(mSTP, mDTP)(BookingIndexItem);