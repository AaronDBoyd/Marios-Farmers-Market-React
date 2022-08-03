import React from "react";
import PropTypes from "prop-types";

function Day(props) {
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

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default Day;
