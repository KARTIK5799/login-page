import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify'; 

function App() {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/auth/login" />}
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>

  
      <ToastContainer />
    </Router>
  );
}

export default App;
