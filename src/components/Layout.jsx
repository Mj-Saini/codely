import React from 'react';
import Footer from './common/Footer';
import NeedSupport from './NeedSupport';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

 const location = useLocation();

  // Routes where Footer and NeedSupport should be hidden
  const hideOnRoutes = ['/sign-in', '/sign-up','/page-not-found'];

  const shouldHideExtras = hideOnRoutes.includes(location.pathname);

  return (
    <>
          {children}
          
           {!shouldHideExtras && (
        <>
          <NeedSupport />
          <Footer />
        </>
      )}
    </>
  );
};


export default Layout
