import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors, session }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
    sessionId: session.id
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    processDemo: demo => dispatch(login(demo))
  };
};

export default connect(mSTP, mDTP)(SessionForm);
