import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import HomePage from './components/HomePage';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
