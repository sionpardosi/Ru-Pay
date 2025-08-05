import React from 'react'
import './footer.css'
import Logo from "../../assets/rupay-logo.svg"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Footer(){

    const navigate = useNavigate(); 

    return(

        <div className="section-7">
            <div className="experts-section_01">
                      <div className="contentFooter">
                        <div className="logo_01">
                          <img className="logoFooter" src={Logo} />
                        </div>

                        <span className="namaPT_span">PT. Payu Berkah Bersama</span>

                        <div className="alamatFooter">
                          <span className="alamatFooter_span">Duta Mas Fatmawati Blok D2 No 11 , Desa/Kelurahan Cipete Utara, Kec.
                            <br/>Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta,
                            <br/>Kode Pos: 12150</span>
                        </div>
                      </div>

                      <div className="layananFooter">
                        <div>
                          <span className="layananFooter_span">Layanan</span>
                        </div>

                        <div className="menuLayananFooter">
                          <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="beranda_01">
                              <span className="berandaFooter_span">Beranda</span>
                            </div>
                          </Link>

                          <Link to="/kontak-kami" style={{ textDecoration: 'none' }}>
                            <div className="kontak-kami_01">
                              <span className="kontakKamiFooter_span">Kontak Kami</span>
                            </div>
                          </Link>

                          <Link to="/tentang-kami" style={{ textDecoration: 'none' }}>
                            <div className="tentang-kami_01">
                              <span className="tantangKamiFooter_span">Tentang Kami</span>
                            </div>
                          </Link>

                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="right-column">
                        <div className="text_right">
                          <span className="text_right_span">© 2025, PT.Rupay All Right Reserved</span>
                        </div>
                      </div>
                    </div>
        </div>
    )
}
export default Footer;
