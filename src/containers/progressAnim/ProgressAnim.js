import React from "react";
import { Progress } from "reactstrap";

const ProgressAnim = props => {
  return (
    <div>
      <Progress animated value={90}>
        HTML - 90%
      </Progress>
      <br />
      <Progress animated color="success" value={75}>
        CSS - 75%
      </Progress>
      <br />
      <Progress animated color="info" value={60}>
        Javascript -60%
      </Progress>
    </div>
  );
};

export default ProgressAnim;
