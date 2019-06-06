import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class PastUserEventForm extends Component {

  render() {

    return (
      <div className="feature">
        <h3>Event Details</h3>
        <h4>Title: {this.props.userEvent.title}</h4>
        <p>Date: {this.props.userEvent.date}</p>
        <p>
          <a href={this.props.userEvent.url} target="_blank" rel="noopener noreferrer">
            <span> {this.props.userEvent.title}</span>
          </a>
        </p>
        <h3>Record your result</h3>
        <form onSubmit={this.props.saveUserEvent}>
          <span>Result: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="result"
            value={this.props.userEvent.result || ''}
          />
          <br />
          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
          />
        </form>
        <img className="active-icon" src={'/A-icon.png'}  alt="" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userEvents: state.userEvents
  }
}

PastUserEventForm.propTypes = {
  userEvent: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  saveUserEvent: PropTypes.func.isRequired
}

export default PastUserEventForm = withRouter((PastUserEventForm));
