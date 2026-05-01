import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // import footer
import '../styles/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer /> {/* add here */}
    </div>
  );
};

export default Layout;