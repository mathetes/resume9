import React from 'react';
import { Card, CardTitle, CardGroup,
    CardBody } from 'reactstrap';

const Contacts = () => (
    <>
        <CardGroup>
            <Card>
            <CardBody >
                <CardTitle>Мои контакты</CardTitle>   
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