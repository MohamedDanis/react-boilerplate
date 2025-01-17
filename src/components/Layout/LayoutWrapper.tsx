import Header from './Header';
import { Outlet } from 'react-router';

const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutWrapper;
