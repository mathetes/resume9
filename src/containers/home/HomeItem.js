import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardBody } from 'reactstrap';

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

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
