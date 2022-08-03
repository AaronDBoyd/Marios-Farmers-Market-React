import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return (
    <React.Fragment>
      <h3>{props.month}</h3>

      <p>- Our Selection -</p>
      <p>
        <strong>{props.products.join(", ")}</strong>
      </p>
      <hr />
    </React.Fragment>
  );
}
Month.propTypes = {
  month: PropTypes.string.isRequired,
};

export default Month;
