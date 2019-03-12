import React from 'react';
import { Progress } from 'reactstrap';

const ProgressAnim = (props) => {
  return (
    <div>
      <Progress animated value={90}>HTML - 90%</Progress><br />
      <Progress animated color="success" value="25">CSS - 75%</Progress><br />
      <Progress animated color="info" value={50}>Javascript -60%</Progress><br />
      <Progress animated color="warning" value={75}></Progress><br />
      <Progress animated color="danger" value="100"></Progress>
    </div>
  );
};

export default ProgressAnim;