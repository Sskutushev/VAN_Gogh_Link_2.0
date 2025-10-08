import React from 'react';
import './style.css';

import Header from './components/Header';
import RecommendedSection from './components/RecommendedSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <RecommendedSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;