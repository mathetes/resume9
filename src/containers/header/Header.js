import React from 'react';
import './Header.scss';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

const Header = () => (
    <div className="block-header">
        <h1>Я - Роман Аяпергенов</h1>
        <h2>React Developer</h2>
        <Breadcrumbs />
    </div>
  )

export default Header;