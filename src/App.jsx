import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; 
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />

        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/auth/login" replace />}
        />
        
   
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
