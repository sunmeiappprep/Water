import { LOGOUT_USER, RECEIVE_USER } from "../actions/session_actions";

const defaultUser = {
  id: null,
};
const sessionReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return { id: action.currentUser.id };
    case LOGOUT_USER:
      return defaultUser;
    default:
      return state;
  }
};

export default sessionReducer;