import React from 'react';
import {
    Card, CardTitle, CardGroup,
    CardBody, CardText, Row, Col
} from 'reactstrap';

const Education = () => (
    <CardGroup>
        <Card>
            <CardBody >
                <h2>
                    <CardTitle>Образование</CardTitle>
                </h2>
                <Row>
                    <Col sm="12">
                        <Card body className="card-info">
                            <CardTitle>Карагандинский Горно-механический колледж 1992-1996</CardTitle>
                            <CardText>Специальность Электромеханик</CardText>
                        </Card>
                    </Col>
                </Row><br />
                <br />
            </CardBody>
        </Card>
    </CardGroup>
)

export default Education;