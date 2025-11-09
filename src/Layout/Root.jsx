import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Footer from '../component/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          <main>
              <Toaster></Toaster>
            <Outlet></Outlet>
          </main>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;