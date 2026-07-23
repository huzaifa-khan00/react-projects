import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import Contact from './pages/contact.jsx'
import UsersList from './components/UsersList.jsx';
import Users from './pages/users.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
