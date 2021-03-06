import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import {resetSessionErrors} from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    processDemo: demo => dispatch(login(demo)), 
    closeModal: () => dispatch(closeModal()),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);