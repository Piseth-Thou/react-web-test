import React from 'react';
import './App.css';
import Slide from './Slide';
import Cards from './Card';
import './About';
import { Row, Col } from 'reactstrap';

class Home extends React.Component {
  render (){
    return (
            <> 
                  <Row>
                          <Col><Slide /></Col>
                    </Row>
                    
                      <p style={{margin:"0 10px 10px 10px", fontWeight:'500', borderBottom:'solid 1px '}}>Pupular Product</p>
                    
                      
                      <Row style={{marginBottom:'10px'}}>
                          <Col lg="2" md="2" sm="4" xs="4"><Cards /></Col>
                          <Col lg="2" md="2" sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>         
                      </Row>
                      <Row style={{marginBottom:'10px'}}>
                          <Col lg="2" md="2" sm="4" xs="4"><Cards /></Col>
                          <Col lg="2" md="2" sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>
                          <Col lg="2" md="2"v sm="4"  xs="4"><Cards /></Col>         
                      </Row>                     
                      <hr />
                      <Row style={{marginBottom:'10px'}}>
                          <Col lg ="6" md="6" sm="12" xs ="12"><Slide /></Col>
                          <Col lg="2" md="2" sm="4" xs="4"><Cards /></Col>
                          <Col lg="2" md="2" sm="4" xs="4"><Cards /></Col>
                          <Col lg="2" md="2" sm="4" xs="4"> <Cards /></Col>
                                              
                    </Row>
                    <Row style={{marginBottom:'10px'}}>
                          <Col md="6"></Col>
                          <Col md="2" sm="4" xs="4"><Cards /></Col>
                          <Col md="2" sm="4" xs="4"><Cards /></Col>
                          <Col md="2" sm="4" xs="4"><Cards /></Col>
                                              
                    </Row>  
                    <Row style={{marginBottom:'10px'}}>
                          <Col md="12"><Slide /></Col>                   
                    </Row> 
                                          
            </>
    );
  }
}
export default Home;
