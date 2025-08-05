import React from "react";
import "./tentangKami.css";
import hp from "../../assets/handphone.svg"
import Footer from "../footer/footer";

export function TentangKami(){
    return(
        <>
        <div className="section-5">
                <div className="card_base">
                        <div className="text_tentangKami"> 
                            <div className="tentangKami">
                                <span className="tentangKami_span">Tentang Kami</span>
                            </div>
                            <div className="text_01">
                                <div className="text_isi">
                                    <div className="isi">
                                        <span className="isi_span">Rupay adalah platform pembayaran online yang memudahkan pengguna untuk melakukan transaksi secara cepat dan aman. Dengan berbagai metode pembayaran yang tersedia, pengguna dapat memilih cara yang paling sesuai untuk kebutuhan mereka. Payment Hub juga menawarkan antarmuka yang ramah pengguna dan dukungan pelanggan yang responsif, menjadikannya pilihan ideal untuk bisnis dan individu yang ingin mengelola pembayaran dengan efisien. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <img className="iconHp" src={hp} />
                </div>
                <Footer />
        </div>
        </>
    )
} 