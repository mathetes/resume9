import React from 'react';
import { Card, CardTitle, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import "./PageCards.scss";


const PageCards = (props) => {
  return (
    <>
    <CardGroup>
      <Card>
        <CardBody >
          <CardTitle>Resume</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Porfolio</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
    </CardGroup>
        <CardGroup>
        <Card>
          <CardBody>
            <CardTitle>Workflow</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Contacts</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
        </Card>
      </CardGroup>
      </>
  );
};

export default PageCards;