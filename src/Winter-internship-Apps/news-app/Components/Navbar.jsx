import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSearchClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className=" px-2">
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Search-news" className="text-white" onClick={handleSearchClick}>
              Search News
            </Nav.Link>
            <Nav.Link as={Link} to="/Sports-news" className="text-white">
              Sports News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {showModal && <SearchBar />}
    </>
  );
};

export default CustomNavbar;
