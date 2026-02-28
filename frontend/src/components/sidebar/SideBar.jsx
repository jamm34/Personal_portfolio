import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import profileImage from '../../assets/Perfil-JM.jpg';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiGrid, FiMail, FiInfo, FiHome, FiDownload } from "react-icons/fi";
import "./SideBar.css";
import { useState } from "react";

function SideBar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };
    return (
        <>
            <button className="hamburger-btn d-md-none" aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="sidebar" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

            <header className={`sidebar-container ${isOpen ? "active" : ""}`}>
                <div className="profile-section text-center mb-0" >
                    <img src={profileImage} alt="Jose Molina" className="profile-pic-rb" />
                    <h1 className="h4 mb-0">José Molina</h1>
                    <p className="text-light text-opacity-75">Web Developer</p>
                </div>
                <Nav className="nav-section">
                    <NavLink to="/" className={({ isActive }) =>
                        `nav-link-custom ${isActive ? "active" : ""}`
                    } onClick={handleClick}> <FiHome />{t('home')}</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        `nav-link-custom ${isActive ? "active" : ""}`
                    } onClick={handleClick}> <FiInfo />{t('about')}</NavLink>
                    <NavLink to="/all-projects" className={({ isActive }) =>
                        `nav-link-custom ${isActive ? "active" : ""}`
                    } onClick={handleClick}> <FiGrid />{t('projects')}</NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        `nav-link-custom ${isActive ? "active" : ""}`
                    } onClick={handleClick}><FiMail /> {t('contact')} </NavLink>

                </Nav>
                <div className="sidebar-footer">
                    <a
                        href="/cv-jose-molina.pdf"
                        download
                        className="cv-download-btn"
                        onClick={handleClick}
                    >
                        <FiDownload />
                        {t('download_cv')}
                    </a>
                </div>
            </header>
        </>
    );
}

export default SideBar;
