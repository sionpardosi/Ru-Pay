import React from "react";
import "./admin.css";
import Logo from "../../../assets/rupay-logo.svg"
import keyGirl from "../../../assets/ilustrasi.svg"
import { useNavigate } from 'react-router-dom'; 

export function LoginAdmin(){
    const navigate = useNavigate(); 
    
    const handleLupaPasswordClick = () => {
        navigate('#'); 
    };

    return(
        <div className="content">
            <div className="form-right">
                <div className="form">
                    <div className="rectangle">
                        <div className="isi_admin">
                            <div className="logo">
                                <img className="logoMasukAdmin" src={Logo} alt="Logo" />
                            </div>

                            <div className="text">
                                <div className="title-text">Masuk</div>
                                <div className="sub-title">
                                    Masukan akun anda untuk login
                                </div>

                                <div className="emailForm">

                                    <div className="email-box">
                                        <div className="email_span">
                                            Email
                                        </div>
                                        <div className="textBox">
                                            <input type="email" className="input_email"/>
                                        </div>
                                    </div>
                                    
                                    <div className="pass-box">
                                        <div className="pass_span">
                                            Password
                                        </div>
                                        <div className="textBox">
                                            <input type="password" className="input_pass"/>
                                        </div>
                                    </div>
                                    
                                    <div className="lupaPass">
                                        Lupa Password?
                                    </div>

                                    <div className="buttonForm">
                                        <button className="buttonMasuk">Masuk</button>
                                        <div className="garis"></div>
                                    </div>

                                    <div className="accountSection">
                                        <div className="tanyaAkun">
                                            Belum punya akun? 
                                        </div>

                                        <div className="signUp" onClick={() => window.location.href = '/signup'}>
                                            Sign Up
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rupay-right">
                    © 2025, PT.Rupay All Right Reserved
                </div>
            </div>

            <div className="ilustration">
                <img src={keyGirl} alt="ilustrasi" className="ilustrasi"/>
            </div>
        </div>
    )
}