import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CatalogPage from './pages/CatalogsPage/CatalogPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { ExitsPage } from './pages/ExitsPage/ExitsPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import store from './redux/store/store';
import { Provider } from 'react-redux';


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




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>)