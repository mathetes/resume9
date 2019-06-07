import React, { Component } from 'react';
import {
  Card, CardTitle, CardGroup,
  CardBody, CardText, Row, Col,
} from 'reactstrap';
import items from './Jobsprops';
import './Jobs.scss';

function Item({ item }) {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm="12">
            <Card body className="card-info">
              <h4>
                <CardTitle>{item.company}</CardTitle>
              </h4>
              <CardText>{item.period}</CardText>
              <CardText>{item.position}</CardText>
            </Card>
          </Col>
        </Row>
        <br />
      </CardBody>
    </Card>
  );
}

class ItemList extends Component {
  render() {
    const itemElements = this.props.items.map(item => (
      <Item
        item={item}
        key={item.id}
      />
    ));
    return (
      <>
        {itemElements}
      </>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>
          <CardTitle>Место работы</CardTitle>
        </h2>
        <CardGroup>
          <ItemList items={items} />
        </CardGroup>
      </>
    );
  }
}

export default Home;
