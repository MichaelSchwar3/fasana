import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: ""
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Fasana!
          <br/>
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>First Name:
              <input type="text"
                value={this.state.fname}
                onChange={this.update('fname')}
                className="login-input"
              />
            </label>
            <label>Last Name:
              <input type="text"
                value={this.state.lname}
                onChange={this.update('lname')}
                className="login-input"
              />
            </label>
            <label>E-mail:
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
