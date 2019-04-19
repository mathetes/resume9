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
                                        <div className="contacts_icon icon-basic-geolocalize-05"></div>
                                        <i className="fa fa-map-marker faicon"></i>
                                        <h3>Адрес:</h3>
                                        <p>Россия, Новосибирская область, г.Искитим</p>
                                    </div>
                                    <div className="contact_box">
                                        <div className="contacts_icon icon-basic-mail-open-text"></div>
                                        <i className="fa fa-envelope faicon"></i>
                                        <h3>Email:</h3>
                                        <p>nsk.roman@gmail.com</p>
                                    </div>
                                    <div className="contact_box">
                                        <i className="fa fa-vk faicon"></i>
                                        <h3>ВКонтакте:</h3>
                                        <p><Link to="http://vk.com/ayapergenov">vk.com/ayapergenov</Link></p>
                                    </div>
                                    <div className="contact_box">
                                        <div className="contacts_icon icon-basic-webpage-img-txt"></div>
                                        <i className="fa fa-adress-card-0 faicon"></i>
                                        <h3>Веб-сайт:</h3>
                                        <p><a href="//webexcel.ru">webexcel.ru</a></p>
                                    </div>
                                    <div className="contact_box">
                                        <i className="fa fa-skype faicon"></i>
                                        <h3>Skype:</h3>
                                        <p>nskhelper</p>
                                    </div>
                                    <div className="contact_box">
                                        <i className="fa fa-facebook faicon"></i>
                                        <h3>Facebook:</h3>
                                        <p><Link to="https://www.facebook.com/ayapergenov">facebook.com/<br />Роман Аяпергенов</Link></p>
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