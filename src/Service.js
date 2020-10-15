import React from 'react';
import Card from './Card-service';
import Slide from './Slide';
import { Container, Row, Col } from 'reactstrap';

class Service extends React.Component {
    render(){
        return (
            <>
                <Container>
                        
                            <Row>
                                <Col>
                                    <Slide />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                                <Col lg="3" md="3" sm="6">
                                    <Card/> 
                                </Col>
                            </Row>
                    
                </Container>
            </>
        )
    }
}
export default Service;