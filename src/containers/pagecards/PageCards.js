import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardGroup, CardBody } from 'reactstrap';
import "./PageCards.scss";


const PageCards = (props) => {
  return (
    <>
    <CardGroup>
      <Card>
        <CardBody >
          <Link to='/resume'>
            <CardTitle>
            <i className="fa fa-pencil-alt"
                     style={{
                      cursor: 'pointer',
                      color: '#fff'
                     }}
                  ><br />
                  <span>Resume</span>
              </i>  
            </CardTitle>
          </Link>          
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Link to='/portfolio'>
            <CardTitle>Porfolio</CardTitle>
          </Link>
        </CardBody>
      </Card>
    </CardGroup>
        <CardGroup>
        <Card>
          <CardBody>
            <Link to='/workflow'>
              <CardTitle>Workflow</CardTitle>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Link to='/contacts'>
              <CardTitle>Contacts</CardTitle>
            </Link>
          </CardBody>
        </Card>
      </CardGroup>
      </>
  );
};

export default PageCards;