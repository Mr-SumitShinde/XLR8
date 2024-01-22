import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Dashboard from './pages/Dashboard';
import MyStrategy from './pages/MyStrategy';
import CreateStrategy from './pages/CreateStrategy';
import HomePage from './pages/HomePage';
import { useAuth } from './context/AuthContext';


function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create-strategy" element={<CreateStrategy/>} />
          <Route path="/my-strategies" element={isLoggedIn ? <MyStrategy/> : <HomePage/>} />
          <Route path="/dashboard" element={isLoggedIn? <Dashboard/> : <HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
