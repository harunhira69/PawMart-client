import React, { Suspense } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Loading from '../component/Loading';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Toaster for notifications */}
        <Toaster position="top-right" />

        {/* Suspense for lazy-loaded routes */}
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
