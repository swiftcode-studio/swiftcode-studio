import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TechnologiesPage from './pages/TechnologiesPage'
import ContactPage from './pages/ContactPage'
import ServicesDetail from './ServicesDetail'
import { servicesData } from './servicesData'
import InstagramProductPage from './pages/InstagramProductPage'
import InstagramProductPageJa from './pages/InstagramProductPageJa.tsx'
import OffshoreDevPage from './pages/services/OffshoreDevPage'

// Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        {/* English Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* English Service Detail Pages */}
        <Route path="/services/offshore-development" element={<OffshoreDevPage />} />
        <Route path="/services/dedicated-team" element={<ServicesDetail service={servicesData['ai-content-creation']} />} />
        <Route path="/services/qa-testing" element={<ServicesDetail service={servicesData['automation-flow-builder']} />} />
        <Route path="/services/maintenance" element={<ServicesDetail service={servicesData['multi-platform-posting']} />} />
        <Route path="/services/instagram-management" element={<ServicesDetail service={servicesData['instagram-management']} />} />
        <Route path="/services/ai-content-creation" element={<ServicesDetail service={servicesData['ai-content-creation']} />} />
        <Route path="/services/automation-flow-builder" element={<ServicesDetail service={servicesData['automation-flow-builder']} />} />
        <Route path="/services/multi-platform-posting" element={<ServicesDetail service={servicesData['multi-platform-posting']} />} />

        {/* Product Pages */}
        <Route path="/product/instagram" element={<InstagramProductPage />} />

        {/* Japanese Routes */}
        <Route path="/ja" element={<HomePage isJapanese={true} />} />
        <Route path="/ja/about" element={<AboutPage isJapanese={true} />} />
        <Route path="/ja/services" element={<ServicesPage isJapanese={true} />} />
        <Route path="/ja/technologies" element={<TechnologiesPage isJapanese={true} />} />
        <Route path="/ja/contact" element={<ContactPage isJapanese={true} />} />

        {/* Japanese Service Detail Pages */}
        <Route path="/ja/services/offshore-development" element={<OffshoreDevPage isJapanese={true} />} />
        <Route path="/ja/services/dedicated-team" element={<ServicesDetail service={servicesData['ai-content-creation']} isJapanese={true} />} />
        <Route path="/ja/services/qa-testing" element={<ServicesDetail service={servicesData['automation-flow-builder']} isJapanese={true} />} />
        <Route path="/ja/services/maintenance" element={<ServicesDetail service={servicesData['multi-platform-posting']} isJapanese={true} />} />
        <Route path="/ja/services/instagram-management" element={<ServicesDetail service={servicesData['instagram-management']} isJapanese={true} />} />
        <Route path="/ja/services/ai-content-creation" element={<ServicesDetail service={servicesData['ai-content-creation']} isJapanese={true} />} />
        <Route path="/ja/services/automation-flow-builder" element={<ServicesDetail service={servicesData['automation-flow-builder']} isJapanese={true} />} />
        <Route path="/ja/services/multi-platform-posting" element={<ServicesDetail service={servicesData['multi-platform-posting']} isJapanese={true} />} />

        {/* Japanese Product Pages */}
        <Route path="/ja/product/instagram" element={<InstagramProductPageJa />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}
