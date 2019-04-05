import React from 'react';
import { Card, CardBody, Button, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Portfolio.scss";

const Portfolio = (props) => {
  return (
    <div>
      <Card className="card-block">
        <CardImg top width="100%" src="http://lorempixel.com/400/200/sports/" alt="Card image cap" />
        <CardBody>
          <CardTitle>Резюме</CardTitle>
          <Button className="card-button">
          <Link to='/resume'>Смотреть</Link>
          </Button>
        </CardBody>
      </Card>
      <Card className="card-block">
        <CardImg top width="100%" src="http://lorempixel.com/400/200/sports/" alt="Card image cap" />
        <CardBody>
          <CardTitle>Гостиница "Кристалл" http://cristall.online/</CardTitle>
          <Button className="card-button">Смотреть</Button>
        </CardBody>
      </Card>
      <Card className="card-block">
        <CardImg top width="100%" src="http://lorempixel.com/400/200/sports/" alt="Card image cap" />
        <CardBody>
          <CardTitle>Школа Английского языка "Юнити"</CardTitle>
          <Button className="card-button">Смотреть</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Portfolio;