import * as BookingUtil from '../util/booking_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_ONE_BOOKING = 'RECEIVE_ONE_BOOKING';
export const REMOVE_ONE_BOOKING = 'REMOVE_ONE_BOOKING';

const receiveAllBookings = bookings => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
})

const receiveOneBooking = booking => ({
    type: RECEIVE_ONE_BOOKING,
    booking
})

const removeOneBooking = bookingId => ({
    type: REMOVE_ONE_BOOKING,
    bookingId
})

export const fetchBookings = () => dispatch => {
    return(
    BookingUtil.fetchBookings()
    .then(bookings => dispatch(receiveAllBookings(bookings))))
}

export const fetchBooking = bookingId => dispatch => {
    return(
    BookingUtil.fetchBooking(bookingId)
    .then(booking => dispatch(receiveOneBooking(booking))))
}

export const createBooking = booking => dispatch => {    
    return(
    BookingUtil.createBooking(booking)
    .then(booking => dispatch(receiveOneBooking(booking))))
}

export const removeBooking = bookingId => dispatch => {    
    return(
    BookingUtil.removeBooking(bookingId)
    .then(() => dispatch(removeOneBooking(bookingId))))
}


