import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardGroup, CardBody } from 'reactstrap';
import items from './Homeprops';
import './Home.scss';

function Item({ item }) {
  return (

      <Card
          style = {{
            minWidth: "396px",
            margin: "0 30px 0px 0"
          }}
      >
          <CardBody
              style={{
                verticalAlign:"middle"
              }}
              >
              <Link to={`/${item.anchor}`}>
                  <CardTitle>
                    <i className="fas fa-address-card"
                            style={{
                            cursor: 'pointer',
                            color: '#fff',
                            fontSize: '2em'
                            }}
                        ><br />
                      <span>{item.heading}</span>
                    </i>  
                  </CardTitle>
              </Link>     
          </CardBody>
      </Card>

  )
}

class ItemList extends Component {
    render() {
        const articleElements = this.props.items.map(item => 
          <Item item = {item}/>
        )
        return (
          <>
            {articleElements}
          </>   
        )
    }
}

class Home extends React.Component {
  render() {
    return (
      <CardGroup>
          <ItemList items = {items}/>
      </CardGroup>
    );
  }
}

export default Home;