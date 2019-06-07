import React from 'react';
import './App.scss';
import { Container, Row, Col } from 'reactstrap';
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';

const App = () => (
  <div className="App">
    <Container fluid className="App-wrapper">
      <Row>
        <Col xs="8">
          <Main />
        </Col>
        <Col xs="4">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  </div>
);


export default App;
