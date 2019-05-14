import React from 'react';
import {
    Card, CardTitle, CardGroup, CardText, Row, Col,
    CardBody
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faVk,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Contacts.scss";

const Contacts = () => (
    <>
        <CardGroup>
            <Card>
                <CardBody >
                    <CardTitle>
                        <h2>Мои контакты</h2>
                    </CardTitle>
                    <CardGroup>
                        <Card>
                            <CardBody >
                                <Row>
                                    <Col sm="6">
                                        <Card body className="card-info">
                                            <CardTitle className="contact-title">Соц.сети</CardTitle>
                                            <CardText className="contact-link">
                                                <div className="social-container">
                                                    <a
                                                        href="https://www.facebook.com/ayapergenov/"
                                                        className="facebook social"
                                                    >
                                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                                    </a>
                                                    <a
                                                        href="https://www.github.com/mathetes/"
                                                        className="github social"
                                                    >
                                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                                    </a>
                                                    <a
                                                        href="https://www.vk.ru/ayapergenov/"
                                                        className="vk social"
                                                    >
                                                        <FontAwesomeIcon icon={faVk} size="2x" />
                                                    </a>
                                                    <a
                                                        href="https://www.instagram.com/learnbuildteach"
                                                        className="instagram social"
                                                    >
                                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                                    </a>
                                                </div>
                                            </CardText>
                                        </Card>
                                    </Col>
                                    <Col sm="6">
                                        <Card body className="card-info">
                                            <CardTitle className="contact-title">Телефон</CardTitle>
                                            <CardText>
                                                <a className="contact-link" href="tel:+7-923-157-70-52"> +7-923-157-70-52 </a> <br />
                                                <a className="contact-link" href="whatsapp://send?text=Hello&phone=+7-953-888-50-98&abid=+7-953-888-50-98">+7-953-888-50-98 (WhatsApp)</a><br />
                                                <a className="contact-link" href="callto://nskhelper?call">Skype</a>
                                            </CardText>
                                            <CardTitle className="contact-title">Email</CardTitle>
                                            <CardText>
                                                <a className="contact-link" href="mailto:nsk.roman@gmail.com">nsk.roman@gmail.com</a>
                                            </CardText>
                                            <CardTitle className="contact-title">Адрес</CardTitle>
                                            <CardText>
                                                <address className="contact-link">
                                                    633209 г.Искитим, Новосибирская область, Россия
                                      </address>
                                            </CardText>
                                        </Card>
                                    </Col>
                                </Row><br />
                            </CardBody>
                        </Card>
                    </CardGroup>
                </CardBody>
            </Card>
        </CardGroup>

    </>
)

export default Contacts;
