import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Media,
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
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                                    <span className="nav-link-inner--text">Content</span>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownToggle className="pr-0" nav>
                                    <i className="ni ni-books" />
                                    <span className="nav-link-inner--text">Training Materials</span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem href="#" onClick={e => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span className="nav-link-inner--text">Phishing</span>
                                </DropdownItem>
                                </DropdownMenu>
                                <DropdownToggle className="pr-0" nav>
                                    <i className="ni ni-time-alarm" />
                                    <span className="nav-link-inner--text">Timer duration</span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem href="#" onClick={e => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span className="nav-link-inner--text">5 min</span>
                                </DropdownItem>
                                </DropdownMenu>
                                <DropdownItem divider/>   
                            </DropdownMenu>
                        </UncontrolledDropdown>
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