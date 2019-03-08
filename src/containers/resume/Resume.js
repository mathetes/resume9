import React from 'react';
import { Card, CardTitle, CardGroup,
    CardBody } from 'reactstrap';

const Resume = () => (
    <>
        <CardGroup>
            <Card>
                <CardBody >
                    <CardTitle>Навыки</CardTitle>   
                </CardBody>
            </Card>
                </CardGroup>
                <CardGroup>
            <Card>
                <CardBody >
                    <CardTitle>Образование</CardTitle>   
                </CardBody>
            </Card>
        </CardGroup>
    </>
  )

export default Resume;