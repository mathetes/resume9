import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardGroup, CardBody } from 'reactstrap';
import "./Home.scss";

const Home = (props) => {

    return (

    <>
    <CardGroup>
    <Card
          style = {{
            display:"table",
            width: "46%"
          }}
        >
          <CardBody
            style={{
            display:"table-cell",
            verticalAlign:"middle"
            }}
          >
          <Link to='/resume'>
            <CardTitle>
              <i className="fas fa-address-card"
                     style={{
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '2em'
                     }}
                  ><br />
                  <span>Резюме</span>
              </i>  
            </CardTitle>
          </Link>          
        </CardBody>
      </Card>
      <Card
          style = {{
            display:"table",
            width: "46%"
          }}
        >
          <CardBody
            style={{
            display:"table-cell",
            verticalAlign:"middle"
            }}
          >
          <Link to='/portfolio'>
          <CardTitle>
            <i className="fas fa-code"
                style={{
                cursor: 'pointer',
                color: '#fff',
                fontSize: '2em'
                }}
            ><br />
            <span>Портфолио</span>
            </i> 
          </CardTitle>
          </Link>
        </CardBody>
      </Card>
    </CardGroup>
        <CardGroup>
        <Card
          style = {{
            display:"table",
            width: "46%"
          }}
        >
          <CardBody
            style={{
            display:"table-cell",
            verticalAlign:"middle"
            }}
          >
            <Link to='/workflow'>
            <i className="fas fa-keyboard"
                     style={{
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '2em'
                     }}
                  ><br />
                  <span>Workflow</span>
              </i>  
            </Link>
          </CardBody>
        </Card>
        <Card
          style = {{
            display:"table",
            width: "46%"
          }}
        >
          <CardBody
            style={{
            display:"table-cell",
            verticalAlign:"middle"
            }}
          >
            <Link to='/contacts'>
            <CardTitle>
              <i className="fas fa-address-book"
                  style={{
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: '2em'
                  }}
              ><br />
              <span>Контакты</span>
              </i> 
            </CardTitle>
            </Link>
          </CardBody>
        </Card>
      </CardGroup>
      </>
   );
};

export default Home;