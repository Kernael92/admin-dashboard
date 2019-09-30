import React from "react";
import routes from "routes.js";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { 
  Nav,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle, 
  NavbarBrand,
  Navbar,

} from "reactstrap";

var ps;
let content = routes.slice(2, 9);
let dashboard = routes.slice(0, 1);
let timer = routes.slice(9, 12);
let articles = routes.slice(15, 22);
let reports = routes.slice(12, 13);
let subscription = routes.slice(23, 24);
let pages = routes.slice(24, 28);


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-blue"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  render() {
    const { bgColor, routes, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
      if (logo.outterLink !== undefined) {
        logoImg = (
          <a
            href={logo.outterLink}
            className="simple-text logo-mini"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </a>
        );
        logoText = (
          <a
            href={logo.outterLink}
            className="simple-text logo-normal"
            target="_blank"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </a>
        );
      } else {
        logoImg = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-mini"
            onClick={this.props.toggleSidebar}
          >
            <div className="logo-img">
              <img src={logo.imgSrc} alt="react-logo" />
            </div>
          </Link>
        );
        logoText = (
          <Link
            to={logo.innerLink}
            className="simple-text logo-normal"
            onClick={this.props.toggleSidebar}
          >
            {logo.text}
          </Link>
        );
      }
    }
    return (
      <div className="sidebar" data={bgColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null}
          <nav className="nav" navbar>
            {dashboard.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <span
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    <i className="tim-icons icon-chart-pie-36" />
                    <p >{prop.name}</p>
                  </NavLink>
                </span>
              );
            })}
            <UncontrolledDropdown nav >
              <DropdownToggle 
                className="has-arrow"
                data-toggle="collapse"
                nav
                onClick={e => e.preventDefault}
              >
              <i className="tim-icons icon-components"></i>
              <p>Content</p>
              </DropdownToggle>
              <DropdownMenu className="dropdown-navbar" right tag="ul">
                {content.map((prop, key) => {
                  if (prop.redirect) return null;
                  return (
                    <li
                      className={
                        this.activeRoute(prop.path) +
                        (prop.pro ? " active-pro" : "")
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                        onClick={this.props.toggleSidebar}
                        tag="li"
                      >
                      <DropdownItem className="nav-item ">
                        {prop.name}
                      </DropdownItem>    
                      </NavLink>
                    </li>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown  nav>
            <DropdownToggle 
              className="has-arrow"
              color="default"
              data-toggle="dropdown"
              nav
              onClick={e => e.preventDefault}
            > 
              <i className="tim-icons icon-time-alarm" />  
              <p>Duration time</p>
            </DropdownToggle>
            <DropdownMenu className="dropdown-navbar" right tag="ul">
              {timer.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      this.activeRoute(prop.path) +
                      (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                      onClick={this.props.toggleSidebar}
                    >
                    <DropdownItem className="nav-item"> 
                     {prop.name}
                    </DropdownItem>    
                    </NavLink>
                  </li>
                );
              })}
            </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
            <DropdownToggle 
              className="has-arrow"
              color="default"
              data-toggle="dropdown"
              nav
              onClick={e => e.preventDefault}
            >
            <i className="tim-icons icon-single-copy-04"></i>
            <p>Articles</p>
            </DropdownToggle>
            <DropdownMenu className="dropdown-navbar" right tag="ul">
              {articles.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      this.activeRoute(prop.path) +
                      (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                      onClick={this.props.toggleSidebar}
                    >
                    <DropdownItem className="nav-item">
                      {prop.name}
                    </DropdownItem>    
                    </NavLink>
                  </li>
                );
              })}
            </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle 
                className="has-arrow"
                data-toggle="dropdown"
                nav
                onClick={e => e.preventDefault}
              >
              <i className="tim-icons icon-single-02" />
              <p>Pages</p>
              </DropdownToggle>
              <DropdownMenu className="dropdown-navbar" right tag="ul">
                {pages.map((prop, key) => {
                  if (prop.redirect) return null;
                  return (
                    <li
                      className={
                        this.activeRoute(prop.path) +
                        (prop.pro ? " active-pro" : "")
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                        onClick={this.props.toggleSidebar}
                      >
                      <DropdownItem className="nav-item">
                        
                        {prop.name}
                      </DropdownItem>    
                      </NavLink>
                    </li>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
            {reports.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <span
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    <i className= "tim-icons icon-chart-bar-32" />
                    <p >{prop.name}</p>
                  </NavLink>
                </span>
              );
            })}
            {subscription.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <span
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    <i className= "tim-icons icon-wallet-43"/>
                    <p >{prop.name}</p>
                  </NavLink>
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
