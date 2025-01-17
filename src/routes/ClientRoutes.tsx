import { Route, Routes } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
const ClientRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={<div className="text-center text-2xl">Home</div>}
        />
      </Route>
    </Routes>
  );
};

export default ClientRoutes;
