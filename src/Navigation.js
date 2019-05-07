import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from './actions/index';

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {

    const mainNav = (
        <div className="feature text-center">

            <span className="navLink text-center"><Link to="/">Home</Link></span>
            <span className="navLink text-center"><Link to="/login">Log In</Link></span>
            <span className="navLink text-center"><Link to="/signup">Sign Up</Link></span>

        </div>

    )

    const userNav = (
        <div className="feature">

            <span className="navLink"><Link to="/events">Events</Link></span>
            <span className="navLink"><Link to="/user_events">My Events</Link></span>
            <span className="navLink"><Link to="/runs">Runs</Link></span>
            <span className="navLink"><Link to="/trophies">Trophies</Link></span>
            <span className="navLink"><Link to="/user_profile">Profile</Link></span>
            <span className="navLink" onClick={(e) => this.handleLogout(e)}>Log Out</span>

        </div>
    );

    return (
      <header>
        <nav>
          {this.props.isAuthenticated ? userNav : mainNav}
        </nav>
      </header>
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));


//
// <Row className="justify-content-center">
//   <Col md={{ span: 6, offset: 3 }}>
//   </Col>
// </Row>
