import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardGroup, CardText, Row, Col,
    CardBody } from 'reactstrap';

import "./Contacts.scss";

const Contacts = () => (
    <>
        <CardGroup>
            <Card>
            <CardBody >
                <CardTitle><h2>Мои контакты</h2></CardTitle>
                <CardGroup>
                    <Card>
                        <CardBody >
                            <Row>
                                <Col sm="12">
                                    <Card body className="card-info">
                                        <CardTitle className="contact-title">Телефон</CardTitle>
                                        <CardText>
                                            <Link className="contact-link" to="tel:+7-923-157-70-52"> +7-923-157-70-52 </Link> <br />
                                            <Link className="contact-link" to="whatsapp://send?text=Hello&phone=+7-953-888-50-98&abid=+7-953-888-50-98">+7-953-888-50-98 (WhatsApp)</Link><br />
                                            <Link className="contact-link" to="callto://+7-923-157-70-52?call"> Skype</Link>
                                        </CardText>
                                        <CardTitle className="contact-title">Email</CardTitle>
                                        <CardText>
                                            <Link className="contact-link" to="mailto:nsk.roman@gmail.com">nsk.roman@gmail.com</Link>
                                        </CardText>
                                        <CardTitle className="contact-title">Адрес</CardTitle>
                                        <CardText>
                                            <address  className="contact-link">
                                                633209 г.Искитим, Новосибирская область, Россия
                                            </address>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row><br />
                            <Row>
                                <Col sm="12">
                                    <Card body  className="card-info">
                                        <CardTitle className="contact-title">Соц.сети</CardTitle>
                                        <CardText  className="contact-link">
                                        <div className="contact_box">                                            
                                            <Link to="http://vk.com/ayapergenov"><i className="fa fa-vk icon"></i></Link>
                                        </div>
                                        <div className="contact_box">
                                        <Link to="//webexcel.ru">
                                            <div className="contacts_icon icon-basic-webpage-img-txt"></div>
                                            <i className="fa fa-adress-card-0 faicon"></i>
                                        </Link>
                                        </div>
                                        <div className="contact_box">
                                            <i className="fa fa-skype faicon"></i>
                                        </div>
                                        <div className="contact_box">
                                        <Link to="https://www.facebook.com/ayapergenov">
                                            <i className="fa fa-facebook faicon"></i>
                                        </Link>
                                        </div>
                                        </CardText>
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