import React, { Component } from 'react';
import { Card, CardTitle, CardGroup,
    CardBody, CardText, Row, Col } from 'reactstrap';
import items from './Jobsprops';
import './Jobs.scss';

function Item({ item }) {
  return (
    <Card>
        <CardBody >
          <h2>
            <CardTitle>Место работы</CardTitle>
          </h2>
            <Row>
                <Col sm="12">
                    <Card body className="card-info">
                    <CardTitle>{item.company}</CardTitle>
                    <CardText>{item.position}</CardText>
                    </Card>
                </Col>
            </Row><br />
        </CardBody>
    </Card>
  )
}

class ItemList extends Component {
    render() {
        const itemElements = this.props.items.map(item => 
          <Item item = {item}/>
        )
        return (
          <>
            {itemElements}
          </>   
        )
    }
}

class Home extends React.Component {
  render() {
    return (
      <CardGroup>
          <ItemList items = {items}/>
      </CardGroup>
    );
  }
}

export default Home;