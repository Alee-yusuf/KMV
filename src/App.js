import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Solutions from './components/Solutions';
import Career from './components/Career';
import ApplyNow from './components/ApplyNow';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <div className="App">
            <Navbar />
            <Hero />
            <AboutUs />
            <OurTeam />
            <Solutions />
            <Career />
            <ApplyNow />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
