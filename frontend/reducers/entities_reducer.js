import { combineReducers } from "redux";
import users from "./users_reducer";
import listingsReducer from './listings_reducer';
import BookingsReducer from "./bookings_reducer";

const entitiesReducer = combineReducers({
  users: users,
  listings: listingsReducer,
  bookings: BookingsReducer
})

export default entitiesReducer;