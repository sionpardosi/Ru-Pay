import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from '../../assets/rupay-logo.svg';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { ButtonNavbar } from "./button/buttonNavbar";
import { useNavigate } from "react-router-dom";

export function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
        document.body.classList.remove('mobile-menu-open');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('mobile-menu-open');
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    console.log("Menu toggled:", !isOpen); 
  };

  const handleDaftarClick = () => {
    navigate('/daftar'); 
    setIsOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const handleMasukClick = () => {
    navigate('/masuk'); 
    setIsOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
      document.body.classList.remove('mobile-menu-open');
    }
  };

  return (
    <>
      <div className="nav">
        <div className="nav-labels">
          
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img className="rupay-beranda" src={Logo} alt="Logo" />
          </Link>

          {isMobile && (
            <button 
              className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

          <div className={`content_navbar_kanan ${isOpen && isMobile ? 'active' : ''}`}>
            <div className="menu-nav">
              <Link to="/beranda" className="beranda" onClick={handleLinkClick}>
                <span className="menu_span">Beranda</span>
              </Link>

              <Link to="/kontak-kami" className="kontak-kami" onClick={handleLinkClick}>
                <span className="menu_span">Kontak Kami</span>
              </Link>

              <Link to="/tentang-kami" className="tentang-kami" onClick={handleLinkClick}>
                <span className="menu_span">Tentang Kami</span>
              </Link>
            </div>

            <div className="navbar-buttons">
              <div 
                data-color="Secondary" 
                data-kind="Primary" 
                data-round="Semi Round" 
                data-state="Default" 
                className="button-navbar-putih" 
                onClick={handleDaftarClick}
              >
                <div className="button-text">
                  <span className="buttontext_span">Daftar</span>
                </div>
              </div>

              <div 
                data-color="Secondary" 
                data-kind="Primary" 
                data-round="Semi Round" 
                data-state="Default" 
                className="button_01" 
                onClick={handleMasukClick}
              >
                <div className="button-text_01">
                  <span className="buttontext_01_span">Masuk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        />
      )}
    </>
  );
};  