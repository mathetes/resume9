import React from 'react';
import {
  Card, CardTitle, CardGroup, CardBody,
} from 'reactstrap';
import ProgressAnim from '../progressAnim/ProgressAnim';
import Education from '../education/Education';
import Jobs from '../jobs/Jobs';

import './Resume.scss';

const Resume = () => (
  <>
    <CardGroup>
      <Card>
        <CardBody>
          <h2>
            <CardTitle>Навыки</CardTitle>
          </h2>
          <div>
            <ProgressAnim />
          </div>
        </CardBody>
      </Card>
    </CardGroup>
    <br />
    <Jobs />
    <Education />
  </>
);

export default Resume;
