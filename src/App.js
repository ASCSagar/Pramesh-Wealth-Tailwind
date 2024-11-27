import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Services from "./pages/Services/Services";
import Downloads from "./pages/Downloads/Downloads";
import Announcement from "./pages/Announcement/Announcement";
import NotFound from "./pages/NotFound/NotFound";
import TidioChat from "./components/TidioChat/TidioChat";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Disclosure from "./pages/Disclosure/Disclosure";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <TidioChat />
      </Layout>
    </Router>
  );
}

export default App;
