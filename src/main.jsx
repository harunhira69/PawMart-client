import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router";
import router from './Routes/routes.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Loading from './component/Loading.jsx';

const AppWrapper = () => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => setAppLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) return <Loading />;

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
