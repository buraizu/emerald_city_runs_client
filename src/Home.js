import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    this.props.getEvents(); 
  }

  render() {
    return (
      <div>
        <div className="feature text-center">
          <h1>Welcome to Emerald City Runs</h1>
          <h3>Your source for upcoming Seattle running events</h3>
          <p>Get inspired to train for something, or simply keep track of your runs!</p>
        </div>
        <div className="feature App largeText">
          <Link to="/signup">SIGN UP</Link>
        </div>
        <div className="feature App largeText">
          <Link to="/login">LOG IN</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    runs: state.runs,
    events: state.events
  }
}

export default connect(mapStateToProps, {...actions})(Home);
