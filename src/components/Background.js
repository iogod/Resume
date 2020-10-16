import React from "react";
import Cloud from "../media/cloud.jpg";
import Mountain from "../media/mountain.png";
import { useLocation } from "react-router-dom";

const Back = () => {
  return (
    <div>
      {useLocation().pathname != "/" && (
        <React.Fragment>
          <img className="cloud" src={Cloud} alt=":)"></img>

          <img className="Montana" src={Mountain} alt="-_-"></img>
        </React.Fragment>
      )}
    </div>
  );
};

export default Back;
