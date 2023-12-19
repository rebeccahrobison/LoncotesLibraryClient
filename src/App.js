import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar color="info" expand="md">
        <Nav navbar>
          <NavbarBrand href="/">📖 Loncotes County Library</NavbarBrand>
          <NavItem>
            <NavLink href="/materials">Materials</NavLink>
            <NavLink href="/patrons">Patrons</NavLink>
            <NavLink href="/checkouts">Checkouts</NavLink>
            <NavLink href="/materials/browse">Browse</NavLink>
            <NavLink href="/checkouts/overdue">Overdue</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
