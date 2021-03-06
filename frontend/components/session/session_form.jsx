import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.props.errors.session = [];
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    return this.props.processForm(user).then(this.props.closeModal);
  }

  update(field) {
    return e => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }
  renderErrors() {
    if (this.props.errors.session) {
      return(
        <ul>
          {this.props.errors.session.map((error, idx) => {
            return <li key={`error-${idx}`}>
              {error}
            </li>;
          })}
        </ul>
      );
    }
  }
  render() {
    return(
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <span id="login">Log In</span>
        <section className="login-form-subcontainer">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              <br/>
              <label>E-mail Address<br/>
                <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="name@company.com"
                />
              </label>
              <br/>
              <label>Password<br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </section>
        <section className="login-form-bottom-section">
        <div id="other-form">
          <span id="login-form-bottom-text">Don't have an account?</span>
          <span id="login-form-bottom-signup">&nbsp;{this.props.otherForm}</span>
        </div>
          <span id="login-form-errors">{this.renderErrors()}</span>
        </section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
