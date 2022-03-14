import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './style/App.css';

import MainPage from './components/pages/MainPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';

import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="wrapper">
      <NavigationBar />

      <main className="main-wrapper">
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;