import React, {Component} from 'react';
import Logo from '../logo/index';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
    render() {
         return (

              <Grid fliud>
                <Row>
                    <Col xs={3} className = "App-cell-left">
                      <Logo/>
                    </Col>
                    <Col xs={3} >
                        <h2>Atrevete a pecar!! </h2>  
                    </Col>
                    <Col xs={3} >
                        <h2>pecadores!! </h2>  
                    </Col>
                    <Col xs={3}  className = "App-cell-rigth">
                        <Logo/>  
                    </Col>
                </Row>
              </Grid>
             
         );
    }
}

export default Header;