import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class EditUserEventForm extends Component {

  render() {
    return (
      <div className="feature">
        <h3>Event Details</h3>
        <h4>Title: {this.props.userEvent.title}</h4>
        <p>Date: {this.props.userEvent.date}</p>
        <h3>Set your goal</h3>
        <form onSubmit={this.props.saveUserEvent}>
          <span>Goal: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="goal"
            value={this.props.userEvent.goal || ''}
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

EditUserEventForm.propTypes = {
  userEvent: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  saveUserEvent: PropTypes.func.isRequired
}

export default EditUserEventForm;
