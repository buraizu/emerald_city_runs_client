import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const LatestRun = (props) => {
  let run = props.runs.runs[0];
  if(run) {
    return (
      <div className="feature">
        <h2>Your latest run</h2>
        <h4>Course: {run.course}</h4>
        <p>Distance: {run.distance} miles</p>
        <Link to={'/runs/' + run.id}>Details</Link>
      </div>
    )
  } else {
    return (
      <div className="feature">
        <h3>
          Nothing here at the moment... Head on over to
          <span> <Link to={'/runs'}>Runs</Link> </span>
          to log your first run!
        </h3>
      </div>
    )
  }

}

LatestRun.propTypes = {
  run: PropTypes.object
}

export default LatestRun;
