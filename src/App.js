import React, { useState } from 'react';
import { Container} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './App.css';

// Pages
import Home from './Home';
import About from './About';
import Service from './Service';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [collapsed, setCollapsed] = useState(false)
  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
            <>
              <Router>  
              <div className="header">
                     <Container >                    
                        <Navbar color="light" light expand="md">
                              <NavbarBrand href="" style={{marginRight:'40px'}}>LO GO</NavbarBrand>
                              <NavbarToggler onClick={toggleNavbar} />
                              <Collapse isOpen={collapsed} navbar>
                                <Nav className="mr-auto" navbar>
                                  <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                  </NavItem><NavItem>
                                    <NavLink href="/about/">About</NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink href="/service/">Services</NavLink>
                                  </NavItem>
                                </Nav>
                                <NavbarText style={{marginRight:'20px',cursor:'pointer'}}>Login</NavbarText>
                                <NavbarText style={{marginRight:'20px',cursor:'pointer'}}>Register</NavbarText>
                              </Collapse>
                            </Navbar>                      
                     </Container>
                </div> 
                <Container style={{backgroundColor:' #eeee',paddingTop:'90px'}}>  
                      <Switch>
                        <Route exact path="/">
                              <Home />
                        </Route>
                        <Route path="/about">
                              <About />
                        </Route>
                        <Route path="/service">
                              <Service />
                        </Route>
                      </Switch>
                </Container> 
              </Router>
              <Footer/>
            </>
    );
}
export default App;
