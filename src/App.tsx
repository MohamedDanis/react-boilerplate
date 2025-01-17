import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import ClientRoutes from '@/routes/ClientRoutes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<ClientRoutes />} />
          {/* <Route path="/admin/*" element={<ClientRoutes />} /> */}
        </Routes>
      </Router>
    </>
  );
}
export default App;
