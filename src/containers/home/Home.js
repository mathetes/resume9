import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardTitle, CardGroup, CardBody,
} from 'reactstrap';
import items from './Homeprops';
import './Home.scss';

const Item = ({ item }) => (
  <Card
    className="home-cards"
    style={{
      minWidth: '396px',
      margin: '0 30px 30px 0',
    }}
  >
    <CardBody
      className="home-cards-body"
      style={{
        verticalAlign: 'middle',
      }}
    >
      <Link to={`/${item.anchor}`}>
        <CardTitle>
          <i
            className="fas fa-address-card"
            style={{
              cursor: 'pointer',
              color: '#fff',
              fontSize: '2em',
            }}
          >
            <br />
            <span>{item.heading}</span>
          </i>
        </CardTitle>
      </Link>
    </CardBody>
  </Card>
);

class ItemList extends Component {
  render() {
    const articleElements = this.props.items.map(item => (
      <Item
        item={item}
        key={item.id}
      />
    ));
    return (
      <>
        {articleElements}
      </>
    );
  }
}

const Home = () => (
  <CardGroup>
    <ItemList items={items} />
  </CardGroup>
);

export default Home;
