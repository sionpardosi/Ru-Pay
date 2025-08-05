import React from 'react';  
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './pages/navbar/navbarTest'
import { KontakKami } from './pages/kontak-kami/kontakKami'
import { TentangKami } from './pages/tentang-kami/tentangKami'
import DaftarDesktop  from './pages/daftar/desktop'
import MasukDesktop  from './pages/masuk/desktop'
import {LoginMerchant} from './pages/masuk/login/merchant'
import Beranda from './pages/beranda/beranda'
import { LoginAgent } from './pages/masuk/login/agent';
import { LoginAdmin } from './pages/masuk/login/admin';
import ScrollToTop from "./pages/scroll/scrollToTop"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/kontak-kami" element={<KontakKami />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/daftar" element={<DaftarDesktop />} />
          <Route path="/daftar-desktop" element={<DaftarDesktop />} />
          <Route path="/masuk" element={<MasukDesktop />} />
          <Route path="/masuk-desktop" element={<MasukDesktop />} />
          <Route path="/masuk/merchant" element={<LoginMerchant />} />
          <Route path="/masuk/agent" element={<LoginAgent />} />
          <Route path="/masuk/admin" element={<LoginAdmin />} />
        </Routes>
        {/* <Footer /> */}
    </Router>
    </div>
    </>
  )
}

export default App;
