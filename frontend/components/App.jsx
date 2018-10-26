import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Link, Switch } from 'react-router-dom';
import Modal from './modal/modal';


const App = () => (
  <div>
    <Modal/>
    <header>
      <Route path='/' component={GreetingContainer} />
    </header>
  </div>
);

export default App;
