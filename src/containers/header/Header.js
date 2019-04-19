import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="block-header">
        <Link className='App-link' to='/'>
            <h1>Я - Роман Аяпергенов<br />
            React Developer</h1>
        </Link>
    </div>
  )

export default Header;