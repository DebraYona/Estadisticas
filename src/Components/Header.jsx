import React, { Component } from 'react';
import './index.css';

import {PageHeader,Grid,Row, Col} from 'react-bootstrap';


const Header =( props) =>(
<PageHeader>
<div className="header">
          
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                        <img className ="logo" src={require('../images/logo-unac.png')} alt='description of unac' />
                        </Col>
                        <Col xs={12} md={8} ls={8}>
                        <h1 className ="titulo" >Estadisticas Egresados</h1>
                        </Col>
                    </Row>
                </Grid>

                   
                    
              
                
            </div>
</PageHeader>
    

)

export default Header 