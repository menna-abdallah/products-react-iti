import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Nav className='h-75 fw-bolder fs-4' fill variant="tabs">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className="text-secondary bg-black ">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/products" className="text-secondary bg-black ">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/register" className="text-secondary bg-black ">Register</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
