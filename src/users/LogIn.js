import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { withRouter } from 'react-router-dom';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.props.authenticate(this.state)
      if(user) {
        this.props.history.push('/user_profile')
      } else {
        window.alert("Unable to Log In with provided credentials")
      }
  }

  render() {
    return (
        <div className="feature login">
          <h3>Log In</h3>
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

export default LogIn = withRouter(connect(null, {...actions})(LogIn));
