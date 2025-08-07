
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import NotFound from './components/NotFound';
import ContactUs from './pages/ContactUs';
import LayOut from './components/LayOut';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import { Toaster } from 'react-hot-toast'; 
import Manufacturing from './pages/Manufacturing';
import Maintenance from './pages/Maintenance';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: 'service', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'manufacturing', element: <Manufacturing /> },
      { path: 'maintenance', element: <Maintenance /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Toaster position="top-center" reverseOrder={false} /> 
        <RouterProvider router={routers} />
      </>
    </I18nextProvider>
  );
}

export default App;
