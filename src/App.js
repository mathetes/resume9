import React, { Component } from 'react';
import './App.scss';
import { Container, Row, Col } from 'reactstrap';
import Main from './containers/main/Main';
import Sidebar from './containers/sidebar/Sidebar'

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
