import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import ProcessAutomation from './pages/ProcessAutomation';
import DataAnalysis from './pages/DataAnalysis';
import SmartTools from './pages/SmartTools';
import DigitalLibrary from './pages/DigitalLibrary';
import VirtualReality from './pages/VirtualReality';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process-automation" element={<ProcessAutomation />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
          <Route path="/smart-tools" element={<SmartTools />} />
          <Route path="/digital-library" element={<DigitalLibrary />} />
          <Route path="/virtual-reality" element={<VirtualReality />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;