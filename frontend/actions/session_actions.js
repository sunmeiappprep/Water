import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER,
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(user => (dispatch(receiveCurrentUser(user))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(user => (dispatch(receiveCurrentUser(user))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(user => (dispatch(logoutCurrentUser())
  ))
);
