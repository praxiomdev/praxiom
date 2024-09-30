import React from 'react';
import './index.css'
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import ROICalculator from './components/ROICalculator';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <Layout>
      <div className="p-4 bg-blue-500 text-white">
        Hello, Tailwind CSS!
      </div>
      <Hero />
      <Services />
      <ROICalculator />
      <CallToAction />
    </Layout>
  );
}

export default App;