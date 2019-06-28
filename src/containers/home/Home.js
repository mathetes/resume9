import React from 'react';
import { CardGroup } from 'reactstrap';
import ItemList from './HomeItemList';
import items from './Homeprops';
import './Home.scss';

const Home = () => (
  <CardGroup>
    <ItemList items={items} />
  </CardGroup>
);

export default Home;
