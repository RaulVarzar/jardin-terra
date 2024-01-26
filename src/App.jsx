import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import ContactPage from './components/pages/ContactPage';
import ServicesPage from './components/pages/ServicesPage';
import StartPage from './components/pages/StartPage';
import Navbar from './components/Navbar';

import ThemeContextProvider from './store/user-context.jsx';

function App() {
  const location = useLocation();

  return (
    <ThemeContextProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Homepage />} />
            <Route path="servicii" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="/start" element={<StartPage />} />
        </Routes>
      </AnimatePresence>
    </ThemeContextProvider>
  );
}

export default App;
