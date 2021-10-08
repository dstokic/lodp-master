import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../index.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class NavBar extends React.Component {

    render() {

        return (
            <div id="nav">
                <Navbar className='navbar'>
                <Navbar.Brand href="/">
                    <img alt='LOPD' src={process.env.PUBLIC_URL + '/Logo.png'} />
                </Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="responsive-navbar-nav"/>*/}
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link id="link" className="brown-text" href="/aboutus">About Us</Nav.Link>
                        <Nav.Link id="link" className="brown-text" href="/contribute">Contribute a Dataset</Nav.Link>

                        <NavDropdown id="link" title="Related Links">
                            <NavDropdown.Item href="https://opendatacampus.com/" target="_blank">Open Data Handbook</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                {/* <div className='line dark-brown'></div> */}
            </div>
        );
    }
}