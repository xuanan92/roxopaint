import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PreNavbar from './components/PreNavbar.js'
import LoginPage from './pages/LoginPage.js'
import Navbar from './components/Navbar.js'
import HomePage from './pages/HomePage.js'
import ProductsPage from './pages/ProductsPage.js'
import VideosPage from './pages/VideosPage.js'
import TechnicalPage from './pages/TechnicalPage.js'
import PartnerPage from './pages/PartnerPage.js'
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
import IntroPage from './pages/IntroPage.js'
import PoliciesPage from './pages/PoliciesPage.js'
import BecomePartnerPage from './pages/BecomePartnerPage.js'
import PartnerWebsitePage from './pages/PartnerWebsitePage.js'

function App() {
  return (
    <>
    <Router forceRefresh={true}>
      <div className="p-3 App">
      <PreNavbar />
      <Navbar />
        <Routes>
          <Route path='/login' element={<LoginPage />} exact />

          <Route path='/' element={<HomePage />} exact />
          <Route path='/products' element={<ProductsPage />} exact />
          <Route path='/videos' element={<VideosPage />} exact />
          <Route path='/technical' element={<TechnicalPage />} exact />
          <Route path='/partner' element={<PartnerPage />} exact />
          <Route path='/contact' element={<ContactPage />} exact />

        </Routes>
          <Routes>
          <Route path='/designers' element={<DesignersPage />} exact />
          <Route path='/architects' element={<ArchitectsPage />}exact />
          <Route path='/contractors' element={<ContractorsPage />} exact />
          <Route path='/certificate' element={<CertificatePage />} exact />
          <Route path='/documents' element={<DocumentsPage />} exact />
          <Route path='/intro' element={<IntroPage />} exact />
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
