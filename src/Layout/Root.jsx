import React, { Suspense } from 'react';


import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Loading from '../component/Loading';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        
        <Toaster position="top-right" />

   
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
