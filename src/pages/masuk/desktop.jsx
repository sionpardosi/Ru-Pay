import React, { useState } from "react";
import "./desktop.css";
import { Link, useLocation } from "react-router-dom";
import transaksi from '../../assets/transaksi.svg'
import mitra from '../../assets/mitra.svg'
import orang from '../../assets/orang.svg'
import Footer from '../footer/footer'

export function MasukDesktop(){

    return(
        <>
        <div className="desktop">
            
            <div className="services-section">
              <div className="intro-section">
                <div className="content_01">
                  
                  <div className="titleMasuk">
                    <span className="titleMasuk_span">Masuk</span>
                  </div>
                  <div>
                    <span className="subTitleMasuk_span">Jadilah salah satu pengguna kami dan dapatkan kenyamanan dalam bertransaksi</span>
                </div>
                </div>
              </div>

            <div className="section-1">
                <div className="card">
                  
                  <div className="content_02">
                    
                    <div className="text_01">
                      <div className="titleJadiMerchant">
                        <span className="titleJadiMerchant_span">Jadi Merchant Kami</span>
                      </div>

                      <div className="JadiMerchant">
                        <span className="JadiMerchant_span">Kami memberikan fasilitas secara transparan dan aman dalam bertransaksi untuk mitra kami.</span>
                      </div>

                    </div>

                    <Link to="/masuk/merchant">
                      <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_03">
                          <div className="button-text_03">
                            <span className="buttontext_03_span">Masuk sebagai Merchant</span>
                          </div>
                      </div>
                    </Link>
                    
                  </div>
                  <img className="iconMitraMasuk" src={mitra} />
                </div>
            </div>

            <div className="section-2">
                <div className="card_01">
                    <div className="content_03">
                        <div className="text_02">
                            <div className="titleJadiAgent">
                                <span className="titleJadiAgent_span">Jadi Agent Kami</span>
                            </div>

                            <div className="jadiAgent">
                                <span className="jadiAgent_span">Jadilah agen kami dapatkan faslitas menarik dari kami</span>
                            </div>
                            </div>

                            <Link to="/masuk/agent">
                              <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_04">
                                <div className="button-text_04">
                                    <span className="buttontext_04_span">Masuk sebagai Agent</span>
                                </div>
                              </div>
                            </Link>
                    </div>
                    <img className="iconTransaksiMasuk" src={transaksi} />
                </div>
            </div>

            <div className="section-2">
                <div className="card_01">
                    <div className="content_03">
                        <div className="text_02">
                            <div className="titleJadiAnggota">
                                <span className="titleJadiAnggota_span">Jadi Anggota</span>
                            </div>

                            <div className="jadiAnggota">
                                <span className="jadiAnggota_span">Jelajahi fasiltas kami dengan akun pribadi anda</span>
                            </div>
                            </div>
                            
                            <Link to="/masuk/admin">
                              <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_04">
                                <div className="button-text_04">
                                  <span className="buttontext_04_span">Masuk sebagai akun personal</span>
                                </div>
                              </div>
                            </Link>
                    </div>
                    <img className="iconOrangMasuk" src={orang} />
                </div>
            </div>
        </div>
      <Footer />
      </div>
    </>
   )
}

export default MasukDesktop