import { combineReducers } from "redux";
import users from "./users_reducer";
import listingsReducer from './listings_reducer';

const entitiesReducer = combineReducers({
  users: users,
  listings: listingsReducer,
})

export default entitiesReducer;