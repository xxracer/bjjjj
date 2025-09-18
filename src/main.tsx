import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import AffiliateSchools from './pages/AffiliateSchools';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Facility from './pages/Facility';
import Faq from './pages/Faq';
import FreeTrial from './pages/FreeTrial';
import Instructors from './pages/Instructors';
import InstructorDetail from './pages/InstructorDetail';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Schedule from './pages/Schedule';
import Sponsorship from './pages/Sponsorship';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'affiliate-schools', element: <AffiliateSchools /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'facility', element: <Facility /> },
      { path: 'faq', element: <Faq /> },
      { path: 'free-trial', element: <FreeTrial /> },
      { path: 'instructors', element: <Instructors /> },
      { path: 'instructors/:id', element: <InstructorDetail /> },
      { path: 'programs', element: <Programs /> },
      { path: 'programs/:id', element: <ProgramDetail /> },
      { path: 'schedule', element: <Schedule /> },
      { path: 'sponsorship', element: <Sponsorship /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
