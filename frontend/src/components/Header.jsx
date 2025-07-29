import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import profileImage from '../assets/profile-image.jpg';

function Header() {
    return (
        <header className="d-flex flex-column align-items-center py-4">
            <div className="profile-section text-center mb-0" >
                <img src={profileImage} alt="Jose Molina" className="profile-pic-rb" />
                <h1 className="h4 mb-0">Jose Molina</h1>
                <p className="text-light text-opacity-75">Web Developer</p>
            </div>
            <Nav defaultActiveKey="#home" className="flex-column w-100"> 
                <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
        </header>
    );
}
export default Header;