import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import PreNavbar from './components/PreNavbar.js'
import Navbar from './components/Navbar.js'
import HomePage from './pages/HomePage.js'
import ProductsPage from './pages/ProductsPage.js'
import VideosPage from './pages/VideosPage.js'
import TechnicalPage from './pages/TechnicalPage.js'
import GrowPage from './pages/GrowPage.js'
import ContactPage from './pages/ContactPage.js'
import Footer from './components/Footer.js'


import DesignersPage from './pages/DesignersPage.js'
import ArchitectsPage from './pages/ArchitectsPage.js'
import ContractorsPage from './pages/ContractorsPage.js'
import CertificatePage from './pages/CertificatePage.js'
import DocumentsPage from './pages/DocumentsPage.js'
import ColorPalletePage from './pages/ColorPalletePage.js'
import HowTosPage from './pages/HowTosPage.js'
import SocialResponsibilityPage from './pages/SocialResponsibilityPage.js'
import CareersPage from './pages/CareersPage.js'
import PublicRelationPage from './pages/PublicRelationPage.js'
import FAQsPage from './pages/FAQsPage.js'
import PaintCalPage from './pages/PaintCalPage.js'
import SiteMapPage from './pages/SiteMapPage.js'
import BuyNowPage from './pages/BuyNowPage.js'
import PoliciesPage from './pages/PoliciesPage.js'
import BecomePartnerPage from './pages/BecomePartnerPage.js'
import PartnerWebsitePage from './pages/PartnerWebsitePage.js'

function App() {
  return (
    <>
    <Router>
    <div className="App">
    <PreNavbar />
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/products' element={<ProductsPage />} exact />
        <Route path='/videos' element={<VideosPage />} exact />
        <Route path='/technical' element={<TechnicalPage />} exact />
        <Route path='/grow' element={<GrowPage />} exact />
        <Route path='/contact' element={<ContactPage />} exact />

      </Routes>
        <Routes>
        <Route path='/designers' element={<DesignersPage />} exact />
        <Route path='/architects' element={<ArchitectsPage />}exact />
        <Route path='/contractors' element={<ContractorsPage />} exact />
        <Route path='/certificate' element={<CertificatePage />} exact />
        <Route path='/documents' element={<DocumentsPage />} exact />
        <Route path='/colorpallete' element={<ColorPalletePage />} exact />
        <Route path='/howtos' element={<HowTosPage />} exact />
        <Route path='/socialresponsibility' element={<SocialResponsibilityPage />} exact />
        <Route path='/careers' element={<CareersPage />} exact />
        <Route path='/publicrelation' element={<PublicRelationPage />} exact />
        <Route path='/faqs' element={<FAQsPage />} exact />
        <Route path='/paintcal' element={<PaintCalPage />} exact />
        <Route path='/sitemap' element={<SiteMapPage />} exact />
        <Route path='/buynow' element={<BuyNowPage />} exact />
        <Route path='/policies' element={<PoliciesPage />} exact />
        <Route path='/becomepartner' element={<BecomePartnerPage />} exact />
        <Route path='/partnerwebsite' element={<PartnerWebsitePage />} exact />
      </Routes>
      <Footer />
    </div>
    </Router>
    </>
  );
}

export default App;
