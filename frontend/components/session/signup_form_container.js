import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    errors: state.errors,
    formType: "Sign Up"
  }
);};

const mapDispatchToProps = dispatch => ({
  processForm: (user)=> dispatch(signup(user)),
  otherForm: (
  <button onClick={() => dispatch(openModal('login'))}>
    Log In
  </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
