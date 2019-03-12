import React from 'react';
import { Card, CardTitle, CardGroup, CardText, Row, Col,
    CardBody } from 'reactstrap';

const Contacts = () => (
    <>
        <CardGroup>
            <Card>
            <CardBody >
                <CardTitle>Мои контакты</CardTitle>
                <CardGroup>
                    <Card>
                        <CardBody >
                            <CardTitle>Место работы</CardTitle>
                            <Row>
                                <Col sm="12">
                                    <Card body className="card-info">
                                    <CardTitle>Телефон</CardTitle>
                                    <CardText></CardText>
                                    </Card>
                                </Col>
                            </Row><br />
                            <Row>
                                <Col sm="12">
                                    <Card body  className="card-info">
                                    <CardTitle>Сайт"</CardTitle>
                                    <CardText>frontend.webexcel.ru</CardText>
                                    </Card>
                                </Col>
                            </Row><br />
                            
                        </CardBody>
                    </Card>
                </CardGroup>  
                {/*<a className="btn-floating btn-lg btn-fb" type="button" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn-floating btn-lg btn-li" type="button" role="button"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn-floating btn-lg btn-ins" type="button" role="button"><i className="fab fa-instagram"></i></a>
                <a className="btn-floating btn-lg btn-vk" type="button" role="button"><i className="fab fa-vk"></i></a>
                <a className="btn-floating btn-lg btn-git" type="button" role="button"><i className="fab fa-github"></i></a>
<a className="btn-floating btn-lg btn-email" type="button" role="button"><i className="fas fa-envelope"></i></a>*/}
            </CardBody>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card>
            <CardBody >
                <CardTitle>Форма контакта</CardTitle>   
            </CardBody>
            </Card>
        </CardGroup>
    </>
  )

export default Contacts;