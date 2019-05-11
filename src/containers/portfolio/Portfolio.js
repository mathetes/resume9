import React from 'react';
import { Card, CardBody, Button, CardTitle, CardGroup, CardImg } from 'reactstrap';
import items from './Portfolioprops';
import "./Portfolio.scss";
import resume9 from '../../static/resume9.jpg';
import cristall from '../../static/cristall.jpg';
import unity from '../../static/unity.jpg';

const Item = ({item}) => {
  return (
      <Card className="card-block">
        <CardImg width="100%" src={cristall} alt={item.imgalt} />
        <CardBody>
          <CardTitle>{item.heading}</CardTitle>
          <a href={item.anchors}>
            <Button className="card-button">
              Смотреть
            </Button>
          </a>
        </CardBody>
      </Card>
  )
}

class ItemList extends React.Component {
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

class Portfolio extends React.Component {
  render() {
    return (
      <CardGroup>
          <ItemList items = {items}/>
      </CardGroup>
    );
  }
}

export default Portfolio;
