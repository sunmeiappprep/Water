import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
})

export const resetSessionErrors = () => ({
  type: RESET_SESSION_ERRORS,
});

export const login = user => dispatch => {
  return APIUtil.login(user)
  .then(
    res => dispatch(receiveCurrentUser(res))
  , errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
}
export const signup = user => dispatch => {
  return APIUtil.signup(user)
  .then( res => dispatch(receiveCurrentUser(res))
  
  )
}
export const logout = () => dispatch => {
  return APIUtil.logout()
  .then( () => dispatch(logoutCurrentUser()))
}