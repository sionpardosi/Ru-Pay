import React, { useState } from "react";
import "./navbar.css";
import Logo from '../../assets/rupay-logo.svg';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { ButtonNavbar } from "./button/buttonNavbar";
import { useNavigate } from "react-router-dom";

export function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen); 
  }

  const navigate = useNavigate(); 

  const handleDaftarClick = () => {
    navigate('/daftar'); 
  };

  const handleMasukClick = () => {
    navigate('/masuk'); 
  };

    return (
    <div className="nav">
      <div className="nav-labels">
        
        <Link to="/" className="logo">
            <img className="rupay-beranda" src={Logo} alt="Logo" />
        </Link>

        <div className="content_navbar_kanan">
          <div className="menu-nav">
            <Link to="/beranda" className="beranda">
              <span className="menu_span">Beranda</span>
            </Link>

            <Link to="/kontak-kami" className="kontak-kami">
              <span className="menu_span">Kontak Kami</span>
            </Link>

            <Link to="/tentang-kami" className="tentang-kami">
              <span className="menu_span">Tentang Kami</span>
            </Link>
          </div>

          <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button-navbar-putih" onClick={handleDaftarClick}>
            <div className="button-text">
              <span className="buttontext_span">Daftar</span>
            </div>
          </div>

          <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_01" onClick={handleMasukClick}>
            <div className="button-text_01"><span className="buttontext_01_span">Masuk</span></div>
          </div>

        </div>
      </div>
    </div>  
  );
};