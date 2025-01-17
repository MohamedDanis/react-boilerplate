import React from 'react';
import Header from './Header';

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutWrapper;
