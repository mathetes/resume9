import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const name = 'Роман Аяпергенов';
  const position = 'React Developer';

  return (
    <div className="block-header">
      <Link className="App-link" to="/">
        <h1>
          Я -
          {name}
          {' '}
          <br />
          {position}
        </h1>
      </Link>
    </div>
  );
};

export default Header;
