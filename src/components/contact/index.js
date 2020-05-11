import React, {Component} from 'react';
import img2 from '../../images/logo180.png'
import Image from 'react-bootstrap/Image'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AiOutlineWhatsApp, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

class Contact extends React.Component {
    render() {
         return (      
          <div className = "App-div-contact"> 
          <Grid fliud>
          <Row>
              <Col xs={3} className = "App-cell-left">
                   
              </Col>
              <Col xs={2} className = "App-cell-icons" >
                 <Image src={img2} roundedCircle/>
                 {/* <FcHome />  <Link to="/" className = "App-Links">Inicio</Link> */}
              </Col>
              <Col xs={2} className = "App-social-media-ws" >
                    <AiOutlineWhatsApp /> +58 4242384314
              </Col>
              <Col xs={2} className = "App-social-media-ig" >
                  <AiFillInstagram />  dulcespecados6
              </Col>
          </Row>
        </Grid>
        </div>

         );
    }
}

export default Contact;