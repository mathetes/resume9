import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardGroup, CardBody, CardText, Row, Col,
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

class ItemList extends PureComponent {
  render() {
    const itemElements = this.props.items.map(item => <Item item={item} key={item.id} />);
    return <>{itemElements}</>;
  }
}

const Home = () => (
  <>
    <h2>
      <CardTitle>Место работы</CardTitle>
    </h2>
    <CardGroup>
      <ItemList items={items} />
    </CardGroup>
  </>
);

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

ItemList.propTypes = {
  items: PropTypes.string.isRequired,
};

export default Home;
