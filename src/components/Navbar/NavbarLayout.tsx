import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

class NavbarLayout extends React.Component {
  public render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">VIOLA</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Dashboard
            </NavItem>
            <NavDropdown
              eventKey={2}
              title="My Digital Services"
              id="digitalSvc-dropdown"
            >
              <MenuItem eventKey={2.1}> View all Services</MenuItem>
              <MenuItem eventKey={2.2}> Add a Service</MenuItem>
            </NavDropdown>
            <NavItem eventKey={3} href="#">
              Users
            </NavItem>
            <NavItem eventKey={4} href="#">
              Sites
            </NavItem>
            <NavDropdown eventKey={5} title="Help" id="help-dropdown">
              <MenuItem eventKey={5.1}> Documentation</MenuItem>
              <MenuItem eventKey={5.2}> Contact Us</MenuItem>
              <MenuItem eventKey={5.3}> FAQ</MenuItem>
            </NavDropdown>
          </Nav>
          <Navbar.Form pullRight={true}>Welcome, Kim Yong</Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarLayout;
