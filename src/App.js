import './App.css';
import { HomePage } from './Pages/HomePage';
import { Route, Routes, useLocation, } from 'react-router-dom';
import { ArtDetail } from './Pages/ArtDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence onExitComplete>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<HomePage />} />
        <Route path=":objectNumber" element={<ArtDetail />} />
      </Routes>
    </AnimatePresence>

  );
}

export default App;
