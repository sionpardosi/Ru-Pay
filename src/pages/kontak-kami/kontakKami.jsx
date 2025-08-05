import React from "react";
import "./kontakKami.css";
import laptop from "../../assets/laptop.png"
import Footer from "../footer/footer";

export function KontakKami(){
    
    return(
        <>
        <div className="section-5">
                <div className="card_base">
                        <div className="text_kontakKami">
                            <div className="kontakKami">
                                <span className="kontakKami_span">Kontak Kami</span>
                            </div>
                            <div className="text_01">
                                <div className="text_kantorPusat">
                                    <div className="kantorPusat">
                                        <span className="kantorPusat_span">Kantor Pusat</span>
                                    </div>

                                    <div className="alamat">
                                        <span className="alamat_span">Duta Mas Fatmawati Blok D2 No 11 , Desa/Kelurahan Cipete Utara, Kec.<br/>Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta,<br/>Kode Pos: 12150</span>
                                    </div>
                                </div>

                                <div className="text_pusatBantuan">
                                    <div className="pusatBantuan">
                                        <span className="pusatBantuan_span">Pusat Bantuan</span>
                                    </div>

                                    <div className="no.telp">
                                        <span className="no_telp_span">+62-812-3456-2322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <img className="iconLaptop" src={laptop} />
                </div>
                <Footer />
        </div>
        </>    
    )
} 