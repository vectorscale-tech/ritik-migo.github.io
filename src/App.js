import React from 'react';
import MigoLandingPage from './MigoLandingPage';
import PrivacyPolicy from './privacy-policy';
import TermsOfUse from './terms-of-use';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MigoLandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;