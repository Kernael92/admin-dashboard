import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    NavbarToggler,


} from "reactstrap";

class AdminNavbar extends React.Component {
    render() {
        return (
            <>
            <Navbar 
                className="navbar-top navbar-horizontal navbar-dark"
                expand="md"
            >
            <Container className="px-4">
                <NavbarBrand to="/" tag={Link}> 
                    <img src={require('')} alt="..." />
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar-collapse-main">
                    <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
                    <div className="navbar-collapse-header d-md-none">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link to="/">
                                    <img src={require('')} 
                                    alt="..." 
                                />
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button 
                                    className="navbar-toggler"
                                    id="navbar-collapse-main"
                                >
                                <span />
                                <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link-icon" to="/" tag={Link}>
                                <i className="ni ni-planet" />
                                <span className="nav-link-inner--text">Dashboard</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <span className="nav-link-inner--text">Content</span>
                            <ul>
                                <li>
                                    <i className="books" />
                                    <span>Training Materials</span>
                                    <ul>
                                        <li>
                                            <NavLink className="nav-link-icon" to="#" tag={Link}>
                                                <span className="nav-link-inner--text">Phishing</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link-icon" to="#" tag={Link}>
                                                <span className="nav-link-inner--text">Phishing</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <i className="ni ni-time-alarm" />
                                    <span>Timer Duration</span>
                                    <ul>
                                        <li>
                                            <NavLink className="nav-link-icon" to="#" tag={Link}>
                                                <span className="nav-link-inner--text">5 min</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link-icon" to="#" tag={Link}>
                                                <span className="nav-link-inner--text">10 min</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </NavItem>
                    </Nav>
                </UncontrolledCollapse>
            </Container>
            </Navbar>
            </>
        );
    }
}

export default AdminNavbar;