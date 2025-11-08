import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;