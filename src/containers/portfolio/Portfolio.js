import React from 'react';
import { Card, CardBody, Button, CardTitle, CardGroup, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Portfolio.scss";
import items from './Portfolioprops';

const Item = (item) => {
  return (
      <Card className="card-block">
        <CardImg top width="100%" src={item.picture} alt="{item.imgalt}" />
        <CardBody>
          <CardTitle>{item.heading}</CardTitle>
          <Button className="card-button">
          <Link to={`/${item.anchor}`}>Смотреть</Link>
          </Button>
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