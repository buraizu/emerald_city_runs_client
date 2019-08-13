import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { withRouter } from 'react-router-dom';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.signup(this.state)) {
      this.props.history.push('/user_profile')
      window.alert("Thank you for signing up.")
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return (
      <div className="feature login">
        <h3>Sign Up</h3>
        <form>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="email"
            value={this.state.email}
            placeholder="email"
            className="submissionField"
          />
          <br />
          <input
            type="password"
            onChange={this.handleOnChange}
            name="password"
            value={this.state.password}
            placeholder="password"
            className="submissionField"
          />
          <br />
          <input
            type="submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }

}

export default SignUp = withRouter(connect(null, {...actions})(SignUp));
