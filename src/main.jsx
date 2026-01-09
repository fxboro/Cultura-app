import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Home from './components/home/Home.jsx';
import Events from './components/events/Events.jsx';
import EventDetails from './components/events/EventDetails.jsx';
import Profile from './components/profile/Profile.jsx';
import MyTickets from './components/tickets/MyTickets.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import NotFound from './components/core/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:id", element: <EventDetails /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tickets",
        element: (
          <ProtectedRoute>
            <MyTickets />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
