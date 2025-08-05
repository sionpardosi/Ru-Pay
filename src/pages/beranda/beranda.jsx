import React, { useState } from "react";
import "./beranda.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import transaksi from '../../assets/transaksi.svg'
import fotoTransaksi from '../../assets/transaksi.jpg'
import mitra from '../../assets/mitra.svg'
import alarm from '../../assets/alarm.svg'
import card from '../../assets/card.svg'
import check from '../../assets/check.svg'
import Footer from "../footer/footer";

export function Beranda(){

    return(
      <>
      <div className="desktop">
        <div className="hero-section">
          <img src="../../assets/transaksi.jpg" alt="" />

          <div className="hero-content-beranda">
            <div className="block">
              <div className="text">
                <div className="heroTitle">
                  <span className="heroTitle1_span">Pembayaran Terintegrasi dan Cepat</span>
                </div>

                <div className="subTitle">
                  <span className="subTitle1_span">Dengan Rupay kelola transaksi anda secara terpercaya</span>
                </div>
              </div>

              <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_02">
                <Link to="/daftar" className="buttonDaftar">
                  <div className="button-text_02">
                    <span className="buttontext_02_span">Daftar Sekarang</span>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
        
        <div className="services-section">
          <div className="intro-section">
            <div className="content_01">

                <span className="layanankami_span">Layanan Kami</span>

              <div className="heroTitle02">
                <span className="heroTitle2_span">Kami Melayani Kebutuhan Transaksi Anda </span>
              </div>
            </div>
          </div>

          <div className="section-1">
            <div className="card">
              <img className="iconTransaksiBeranda" src={transaksi} />

              <div className="content_02">
                <div className="text_01">
                  <div className="transfer-uang">
                    <span className="transferuang_span">Transfer Uang</span>
                  </div>
                  
                  <div className="subTitleTransfer_1">
                    <span className="subTitleTransfer_span">Transfer uang Anda dengan cepat dan efisien menggunakan Rupay untuk transaksi yang mudah dan penghematan yang optimal.</span>
                  </div>
                </div>

                <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_03">
                  <Link to="/daftar" className="buttonDaftar3">
                    <div className="button-text_03">
                      <span className="buttontext_03_span">Daftar Sekarang</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section-2">
            <div className="card_01">
              <div className="content_03">
                <div className="text_02">
                  <div className="jadi-mitra-kami">
                    <span className="jadimitrakami_span">Jadi Mitra Kami</span>
                  </div>

                  <div className="subTitleMitra_1">
                    <span className="subTitleMitra_span">Kami memberikan fasilitas secara transparan dan aman dalam bertransaksi untuk mitra kami</span>
                  </div>
                
                </div>
                <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_04">
                  <div className="button-text_04">
                    <span className="buttontext_04_span">Daftar Sekarang</span>
                  </div>
                </div>
              </div>

              <img className="iconMitraBeranda" src={mitra} />
            </div>
          </div>
        </div>

        <div className="intro-section_01">
          <div className="content_04">

              <span className="keunggulankami_span">Keunggulan Kami</span>

            <div className="heroTitleAlasan">
              <span className="heroTitleAlasan_span">Alasan Harus Pilih Rupay untuk Solusi Pembayaran Anda</span>
            </div>
          </div>
        </div>

        <div className="section-6">
          <div className="card_02">
            <div className="bold-duotone-money-card-transfer">
              <img src={card} alt="card" className="card_icon"/>
            </div>

            <div className="content_05">
              <div className="text_03">
                <div className="cepat">
                  <span className="cepat_span">Cepat</span>
                </div>

                <div className="subTitle_card">
                  <span className="subTitleCard_span">Proses pembayaran yang lebih cepat </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card_03">
            <div className="bold-money-verified-check">
              <img src={check} alt="check" className="check_icon"/>
            </div>

            <div className="text_04">
              <div className="aman">
                <span className="aman_span">Aman</span>
              </div>

              <div className="subTitle_check">
                <span className="subTitleCheck_span">Proses pembayaran aman</span>
              </div>
            </div>
          </div>

          <div className="card_04">
            <div className="bold-duotone-time-alarm">
              <img src={alarm} alt="alarm" className="alarm_icon"/>
            </div>

            <div className="text_05">
              <div className="real-time">
                <span className="realtime_span">Real Time</span>
              </div>

              <div className="subTitle_time">
                <span className="subTitleTime_span">Pencatatan transaksi realtime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experts-section">
          <div className="content_06">
            <div className="heroTitle03">
              <span className="heroTitle3_span">Temukan betapa mudahnya mengelola pembayaran Anda dengan Rupay!</span>
            </div>
          </div>

          <div data-color="Secondary" data-kind="Primary" data-round="Semi Round" data-state="Default" className="button_05">
            <Link to="/daftar" className="buttonDaftar2">
              <div className="button-text_05">
                <span className="buttontext_05_span">Daftar Sekarang</span>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>

      </>
          )
      }

export default Beranda