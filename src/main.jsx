import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes, useLocation } from 'react-router-dom';
import Signup from './pages/affiliates/Signup.jsx';
import App from './App.jsx'
import './index.css'
import { Helmet } from 'react-helmet'
import { AuthProvider } from './components/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
