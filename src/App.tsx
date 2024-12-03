import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Sphere from './components/Sphere';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <main>
        <section id="home" className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
            <Sphere />
          </div>
          <Hero />
        </section>
        <About />
        <Work />
      </main>
    </div>
  );
}

export default App;