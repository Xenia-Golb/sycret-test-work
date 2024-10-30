import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CatalogPage from './pages/CatalogsPage/CatalogPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { ExitsPage } from './pages/ExitsPage/ExitsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <CatalogPage />
  },
  {
    path: '/contacts',
    element: <ContactsPage />
  },
  {
    path: '/exits',
    element: <ExitsPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);