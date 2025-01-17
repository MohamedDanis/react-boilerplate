import { Route, Routes } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import LayoutWrapper from '@/components/Layout/LayoutWrapper';
const ClientRoutes = () => {
  return (
    <Routes>
      <LayoutWrapper>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={<div className="text-center text-2xl">Home</div>}
          />
        </Route>
      </LayoutWrapper>
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
};

export default ClientRoutes;
