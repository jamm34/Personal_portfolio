import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import profileImage from '../assets/profile-image.jpg';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return (
        
        <header className="d-flex flex-column align-items-center py-4">
            <div className="profile-section text-center mb-0" >
                <img src={profileImage} alt="Jose Molina" className="profile-pic-rb" />
                <h1 className="h4 mb-0">José Molina</h1>
                <p className="text-light text-opacity-75">Web Developer</p>
            </div>
            <Nav defaultActiveKey={'#Home'} className="flex-column w-100">
                <Nav.Link as={NavLink} to="/" className="nav-link-custom">{t('home')}</Nav.Link>
                <Nav.Link as={NavLink} to="/about" className="nav-link-custom">{t('about')}</Nav.Link>
                <Nav.Link as={NavLink} to="/all-projects" className="nav-link-custom">{t('projects')}</Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">{t('contact')}</Nav.Link>
                
            </Nav>
        </header>
    );
}

export default Header;