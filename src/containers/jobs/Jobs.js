import React from 'react';
import { Card, CardTitle, CardGroup,
    CardBody, CardText, Row, Col } from 'reactstrap';

    const Jobs = () => (
        <CardGroup>
            <Card>
                <CardBody >
                    <CardTitle>Место работы</CardTitle>
                    <Row>
                        <Col sm="12">
                            <Card body className="card-info">
                            <CardTitle>АО "Новосибирский завод искусственного волокна"</CardTitle>
                            <CardText>Ведущий системный администратор</CardText>
                            </Card>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col sm="12">
                            <Card body  className="card-info">
                            <CardTitle>ООО "Торг54"</CardTitle>
                            <CardText>Системный администратор</CardText>
                            </Card>
                        </Col>
                    </Row><br />
                </CardBody>
            </Card>
        </CardGroup>
    )
    
    export default Jobs;