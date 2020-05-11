import React, {Component} from 'react';
import Logo from '../logo/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FcHome,FcContacts,FcCameraIdentification } from "react-icons/fc";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Header extends React.Component {
    render() {
         return (

              <Grid>
                <Row>
                    <Col Col xs={12} sm={3} md={2} lg={1} className = "App-cell-left">
                       <Logo/>
                    </Col>
                    <Col Col xs={3} sm={3} md={3} lg={3} className = "App-cell-icons" >
                       <FcHome />  <Link to="/" className = "App-Links-home">Inicio</Link>
                    </Col>
                    <Col Col xs={3} sm={3} md={3} lg={3} className = "App-cell-icons2" >
                        <FcCameraIdentification />  <Link to="/News" className = "App-Links">Nuestros Pecados</Link>
                    </Col>
                    <Col Col xs={3} sm={3} md={3} lg={3} className = "App-cell-icons3" style={{paddingRight : '17%'}}>
                        <FcContacts />  <Link to="/Contact" className = "App-Links-contact">Contáctenos</Link>
                    </Col>
                </Row>
              </Grid>
             
         );
    }
}

export default Header;