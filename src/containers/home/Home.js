import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardGroup, CardBody } from 'reactstrap';
import "./Home.scss";
import items from './Homeprops';


function Item({ item }) {
    return (
    <CardBody
          style={{
          display:"table-cell",
          verticalAlign:"middle"
          }}
        >
        <Link to='/{item.anchor}'>
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
    )
}

class ItemList extends React.Component {
    render() {
        const articleElements = this.props.items.map(item => 
        <Card
            style = {{
              display:"table",
              width: "46%"
            }}
        >
            <Item item = {item}/>
        </Card>
        )
        return (
            {articleElements}   
        )
    }
}


const Home = (props) => {
    return (
    <CardGroup>
        <ItemList />
    </CardGroup>
   );
};

export default Home;