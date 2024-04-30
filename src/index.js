import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './components/NewPost';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
 const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/new",
        element: <NewPost/>,
        children: [
          {
            path: "about",
            element: <About/>
          }
        ]
      },
    ]
  }
 ])
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

