import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Homepage from './components/pages/Homepage';
import ContactPage from './components/pages/ContactPage';
import ServicesPage from './components/pages/ServicesPage';
import StartPage from './components/pages/StartPage';
import Navbar from './components/Navbar';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         { index: true, element: <Homepage /> },
//         { path: 'contact', element: <ContactPage /> },
//         { path: 'start', element: <StartPage /> },
//         {
//           path: 'servicii',
//           children: [
//             {
//               index: true,
//               element: <ServicesPage />,
//             },
//           ],
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Homepage />} />
            <Route path="servicii" element={<ServicesPage />} />
            <Route path="start" element={<StartPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
