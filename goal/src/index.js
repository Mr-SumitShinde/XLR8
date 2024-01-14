import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import reportWebVitals from './reportWebVitals';
import MyStrategy from './pages/MyStrategy';
import CheckUserDetails from './services/checkUserDetails';
import CreateStrategy from './pages/CreateStrategy';

const Root = () => {
  const userDetails = CheckUserDetails()

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<App />}
          />
          <Route
            path="/dashboard"
            element={userDetails ? <Dashboard userDetails={userDetails}/> : <Navigate to="/" />}
          />
          <Route
            path="/strategy"
            element={userDetails ? <MyStrategy /> : <Navigate to="/" />}
          />
          <Route
            path="/create-strategy"
            element={<CreateStrategy/>}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
