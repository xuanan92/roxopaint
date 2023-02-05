import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import PreNavbar from './components/PreNavbar.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import VideosPage from './pages/VideosPage.jsx'
import TechnicalPage from './pages/TechnicalPage.jsx'
import PartnerPage from './pages/PartnerPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Footer from './components/Footer.jsx'
import DesignersPage from './pages/DesignersPage.jsx'
import ArchitectsPage from './pages/ArchitectsPage.jsx'
import ContractorsPage from './pages/ContractorsPage.jsx'
import CertificatePage from './pages/CertificatePage.jsx'
import DocumentsPage from './pages/DocumentsPage.jsx'
import ColorPalettePage from './pages/ColorPalettePage.jsx'
import HowTosPage from './pages/HowTosPage.jsx'
import SocialResponsibilityPage from './pages/SocialResponsibilityPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import PublicRelationPage from './pages/PublicRelationPage.jsx'
import FAQsPage from './pages/FAQsPage.jsx'
import PaintCalPage from './pages/PaintCalPage.jsx'
import SiteMapPage from './pages/SiteMapPage.jsx'
import BuyNowPage from './pages/BuyNowPage.jsx'
import IntroPage from './pages/IntroPage.jsx'
import PoliciesPage from './pages/PoliciesPage.jsx'
import BecomePartnerPage from './pages/BecomePartnerPage.jsx'
import PartnerWebsitePage from './pages/PartnerWebsitePage.jsx'

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
          <Route path='/colorpalette' element={<ColorPalettePage />} exact />
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

ReactDOMServer.renderToString(<App />)
export default App;
