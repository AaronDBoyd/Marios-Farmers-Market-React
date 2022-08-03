import React from "react";
import marioImage from "./../img/Mario_and_mushroom.png";

function Header() {
  return (
    <React.Fragment>
      <img src={marioImage} alt="Super Mario" />
      <h1>Mario's Farmer's Market</h1>
      <div>
        <b>
          <em>YAAAAHOOOOOO</em>
        </b>
      </div>
      <hr />
    </React.Fragment>
  );
}
export default Header;
