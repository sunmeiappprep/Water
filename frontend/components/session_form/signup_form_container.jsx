import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {resetSessionErrors} from '../../actions/session_actions'

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processDemo: demo => dispatch(login(demo)),
    closeModal: () => dispatch(closeModal()),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);