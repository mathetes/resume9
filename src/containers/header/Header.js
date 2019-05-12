import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {
        name,
        position
    } = props;
    return(
    <div className="block-header">
        <Link className='App-link' to='/'>
            <h1>Я - {name} <br />
            {position}
            </h1>
        </Link>
    </div>);
  }


  Header.defaultProps = {
    name: "Роман Аяпергенов",
    position: "React Developer"
    };

export default Header;
