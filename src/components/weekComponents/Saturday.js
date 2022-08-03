import React from "react";
import PropTypes from "prop-types";

export default function Saturday(props) {
  return (
    <React.Fragment>
      <h3>
        {props.day} - {props.location}
      </h3>
      <p>Hours of Operation: {props.hours}</p>
      <p>Booth space: {props.booth}</p>
      <hr />
    </React.Fragment>
  );
}

Saturday.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};
