import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img1 from '../../images/Logo jpg.jpg'

class News extends React.Component {
    render() {
         return (      
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
               <Card.Title>Torta Quesillo</Card.Title>
               <Card.Text>
                   Deleitate con nuestra deliciosa torta quesillo..
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>   
         );
    }
}

export default News;