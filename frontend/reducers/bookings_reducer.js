import { RECEIVE_ALL_BOOKINGS, RECEIVE_ONE_BOOKING,REMOVE_ONE_BOOKING} from '../actions/booking_actions'

const BookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKINGS:           
            return action.bookings
        case RECEIVE_ONE_BOOKING:            
            return Object.assign({}, state, {[action.booking.id]: action.booking})  
        case REMOVE_ONE_BOOKING:
            let newState = Object.assign({}, state)
            delete newState[action.bookingId]
            return newState;    
        default:
            return state;
    }
}

export default BookingsReducer;