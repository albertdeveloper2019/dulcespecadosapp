import React, {Component} from 'react';
import Logo from '../logo/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcHome,FcContacts,FcNews } from "react-icons/fc";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Header extends React.Component {
    render() {
         return (

              <Grid fliud>
                <Row>
                    <Col xs={3} className = "App-cell-left">
                       <Logo/>
                    </Col>
                    <Col xs={2} className = "App-cell-icons" >
                       <FcHome />  <Link to="/" className = "App-Links">Home</Link>
                    </Col>
                    <Col xs={2} className = "App-cell-icons" >
                        <FcNews />  <Link to="/News" className = "App-Links">News</Link>
                    </Col>
                    <Col xs={2} className = "App-cell-icons" >
                        <FcContacts />  <Link to="/Contact" className = "App-Links">Contact</Link>
                    </Col>
                </Row>
              </Grid>
             
         );
    }
}

export default Header;