import React from 'react';
import './App.css'
import { Container, Row, Col } from 'reactstrap';

function Footer(){
   
        return(
                <>
                    <div className="footer">
                       <Container>
                            <Row className="row" style={{padding:'10px'}}>
                                 <Col md="2" sm="6" xs="6">
                                        <ul>
                                            <li style={{fontSize:'15px',fontWeight:'bold',marginBottom:'10px'}}>PORTFOLIOS</li>
                                            <li>About Us</li>
                                            <li>ICE Announcement</li>
                                            <li>Business Profiles</li>
                                            <li>Brand Offices</li>
                                            <li>ICE Carrers</li>
                                        </ul>
                                 </Col>
                                 <Col md="2" sm="6" xs="6">
                                        <ul>
                                            <li style={{fontSize:'15px',fontWeight:'bold',marginBottom:'10px'}}>SERVICES</li>
                                            <li>Web/Design & Internet Service</li>
                                            <li>PC & Laptop Service</li>
                                            <li>Software Development</li>
                                            <li>CCTV Security Camera</li>
                                            <li>Team Installment</li>
                                        </ul>  
                                 </Col>
                                 <Col md="2" sm="6" xs="6">
                                    <ul>
                                        <li style={{fontSize:'15px',fontWeight:'bold',marginBottom:'10px'}}>FINANCING</li>
                                        <li>Monthly Installments</li>
                                        <li>Pay Bill by Invoice No</li>
                                        <li>Invoice Validation</li>
                                    </ul>
                                 </Col>
                                 <Col md="2" sm="6" xs="6">
                                    <ul>
                                        <li style={{fontSize:'15px',fontWeight:'bold',marginBottom:'10px'}}>SUPPORTS</li>
                                            <li>Customer Feedback</li>
                                            <li>Doors Access Controls</li>
                                            <li>Service Tag Lookup</li>
                                            <li>Service Survey</li>
                                            <li>Contact</li>
                                            <li>Order Tracking</li>
                                     </ul>
                               </Col>
                               <Col md="2" sm="6" xs="6">
                                    <ul>
                                        <li style={{fontSize:'15px',fontWeight:'bold',marginBottom:'10px'}}>SALE SUPPORT</li>
                                        <li >(855) 23 222 924</li>
                                        <li>(855) 23 222 924</li>
                                        <li>(855) 23 222 924</li>
                                        <li>info@icekh.com</li>
                                    </ul> 
                                </Col>                              
                                <Col md="2" sm="6" xs="6">
                                    <ul>
                                        <li style={{fontSize:'16px',fontWeight:'bold',marginBottom:'10px'}}>PAY SUPPORT</li>
                                        <li >(855) 23 222 924</li>
                                        <li >(855) 23 222 924</li>
                                        <li >(855) 23 222 924</li>
                                        <li >accounts@icekh.com</li>
                                    </ul>
                                 </Col>
                              </Row>                   
                         </Container> 
                       <hr />
                       <p style={{textAlign:'center',marginBottom:'0px'}}>Copyrights © Tith Junior. All rights reserved </p> 
                    </div>
                </>
        )
    
}
export default Footer;