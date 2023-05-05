import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { store } from '../src/redux/store/store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google";

import {REACT_APP_CLIENT_ID} from './constants';


// import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import Profile from './components/Profile';

const LazyBody = React.lazy(() => import('./components/Body'));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <React.Suspense><LazyBody /></React.Suspense>
      },
      {
        path: 'restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={REACT_APP_CLIENT_ID}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </GoogleOAuthProvider>
);

