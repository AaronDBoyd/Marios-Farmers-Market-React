import React from "react";
import Week from "./weekComponents/Week";
import Seasonal from "./Seasonal";

export default class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Seasonal />;
      buttonText = "See Weekly Schedule";
    } else {
      currentlyVisibleState = <Week />;
      buttonText = "See Seasonal Produce";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>

        <br></br>
        <br></br>

        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}
