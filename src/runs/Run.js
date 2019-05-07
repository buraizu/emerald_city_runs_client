import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Run = ({run}) => {

  return (
    <div className="feature">
      <h3>Course: {run.course}</h3>
      <Link to={'/runs/' + run.id}>Details</Link>
    </div>
  )

}

Run.propTypes = {
  run: PropTypes.object.isRequired
}

export default Run;
