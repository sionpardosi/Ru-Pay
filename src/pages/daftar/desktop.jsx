import React, { useState } from "react";
import "./desktopDaftar.css";
import Logo from '../../assets/rupay-logo.svg';
import transaksi from '../../assets/transaksi.svg'
import fotoTransaksi from '../../assets/transaksi.jpg'
import mitra from '../../assets/mitra.svg'
import orang from '../../assets/orang.svg'
import Footer from "../footer/footer";

export function DaftarDesktop(){

    return(
        <>
        <div className="desktop">  
            <div className="services-section">
              <div className="intro-section-daftar">
                <div className="content_01">
                  <div>
                    <span className="gabung_span">Gabung dengan Kami</span>
                  </div>
                  <div className="hero-title-daftar">
                    <span className="hero-title-daftar_span">Daftar dan Rasakan Kemudahannya</span>
                  </div>
                </div>
              </div>

              <div className="section-1">
                <div className="card">
                  <div className="content_02">
                    <div className="text_01">
                      <div className="titleMerchant">
                        <span className="titleMerchant">Jadi Merchant Kami</span>
                      </div>

                      <div className="jadi_merchant">
                        <span className="jadi_merchant_span">Kami memberikan fasilitas secara transparan dan aman dalam bertransaksi untuk mitra kami</span>
                      </div>

                    </div>

                    <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_03">
                      <div className="button-text_03">
                        <span className="buttontext_03_span">Daftar sebagai Merchant</span>
                      </div>
                    </div>
                    
                  </div>
                  <img className="iconDaftar" src={mitra} />
                </div>
            </div>

            <div className="section-2">
                <div className="card_01">
                    <div className="content_03">
                        <div className="text_02">
                            <div className="titleAgent">
                                <span className="titleAgent_span">Jadi Agent Kami</span>
                            </div>

                            <div className="jadiAgent">
                                <span className="jadiAgent_span">Jadilah agen kami dapatkan faslitas menarik dari kami</span>
                            </div>
                            </div>

                            <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_04">
                              <div className="button-text_04">
                                  <span className="buttontext_04_span">Daftar sebagai Agent</span>
                              </div>
                          </div>
                      </div>
                      <img className="iconDaftar" src={transaksi} />
                </div>
            </div>

            <div className="section-2">
                <div className="card_01">
                    <div className="content_03">
                        <div className="text_02">
                            <div className="titleAnggota">
                                <span className="titleAnggota_span">Jadi Anggota</span>
                            </div>

                            <div className="jadiAnggota">
                                <span className="jadiAnggota_span">Jelajahi fasiltas kami dengan akun pribadi anda</span>
                            </div>
                            </div>

                            <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_04">
                            <div className="button-text_04">
                                <span className="buttontext_04_span">Daftar sebagai akun personal</span>
                            </div>
                        </div>
                    </div>
                    <img className="iconDaftar" src={orang} />
                </div>
            </div>
        </div>

        <div className="hero-section">
            <div className="hero-content">
                <div className="block">
                  <div className="text_daftar">
                    <div className="textRupay">
                      <span className="textRupay_span">Rupay Memudahkan Segalanya</span>
                    </div>
                    <div className="subTextRupay">
                      <span className="subTextRupay_span">Dengan Rupay kelola transaksi anda secara terpercaya</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
      </>
    )
  }

export default DaftarDesktop