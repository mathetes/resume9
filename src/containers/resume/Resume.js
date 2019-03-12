import React from 'react';
import { Card, CardTitle, CardGroup,
    CardBody } from 'reactstrap';
import ProgressAnim from '../progressAnim/ProgressAnim';
import Education from '../education/Education';
import Jobs from '../jobs/Jobs';

import './Resume.scss';

const Resume = () => (
    <>
        <CardGroup>
            <Card>
                <CardBody >
                    <CardTitle>Навыки</CardTitle>
                    <div>
                        <ProgressAnim />
                    </div>   
                </CardBody>
            </Card>
        </CardGroup>
        <Education />
        <Jobs />
        
    </>
  )

export default Resume;