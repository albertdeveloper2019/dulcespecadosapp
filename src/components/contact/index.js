import React, {Component} from 'react';
import img2 from '../../images/logo180.png'
import Image from 'react-bootstrap/Image'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AiOutlineWhatsApp, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Card from 'react-bootstrap/Card'
import img1 from '../../images/Logo jpg.jpg'

class Contact extends React.Component {
    render() {
        return (     
          <Grid>
            <Row>
            <Col Col xs={2} sm={6} md={6} lg={11}>
                  <div className = "App-div-contact fade-in"> 

                        <Card border="secondary" style={{ width: '20rem'}}>
                        <Card.Img variant="top" src={img1}  style={{ width: '69%', marginLeft: '13%'}} />
                        <Card.Body style={{ backgroundColor: 'magenta'}}>
                            <Card.Title>Whatsapp</Card.Title>
                            <Card.Text style={{ WebkitTextStrokeWidth: 'thick' }}  >
                                +58 4242384314
                            </Card.Text>
                            <Card.Title>Instagram</Card.Title>
                            <Card.Text style={{ WebkitTextStrokeWidth: 'thick' }} >
                                @dulcespecados6
                            </Card.Text>
                            <Card.Title>Facebook</Card.Title>
                            <Card.Text style={{ WebkitTextStrokeWidth: 'thick' }} >
                                dulcespecados6
                            </Card.Text>
                        </Card.Body>
                        </Card>   
                  </div>
                  </Col>
            </Row>   
        </Grid>
         );
    }
}

export default Contact;