import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Button, CardTitle, CardGroup, CardImg,
} from 'reactstrap';
import items from './Portfolioprops';
import './Portfolio.scss';
import portfolio from '../../static/portfolio.jpg';

const Item = ({ item }) => (
  <Card className="card-block">
    <CardImg width="100%" src={portfolio} alt={item.imgalt} />
    <CardBody>
      <CardTitle>{item.heading}</CardTitle>
      <a href={item.anchors}>
        <Button className="card-button">Смотреть</Button>
      </a>
    </CardBody>
  </Card>
);

class ItemList extends PureComponent {
  render() {
    const itemElements = this.props.items.map(item => <Item item={item} key={item.id} />);
    return <>{itemElements}</>;
  }
}

const Portfolio = () => (
  <CardGroup>
    <ItemList items={items} />
  </CardGroup>
);

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

ItemList.propTypes = {
  items: PropTypes.string.isRequired,
};

export default Portfolio;
