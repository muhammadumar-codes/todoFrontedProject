// =====*css*=====
import './styles/style.css'

// =====*Route and Routes*=====
import { Routes, Route } from 'react-router'

// =====*pages*=====
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'

// =====*context provide*=====


// =====*Layout*=====

import Layout from './layouts/Layout'

// =====*Auth Routes*=====
import Login from "./pages/Login/Login"
import Register from './pages/Register/Register'


export default function App() {
  return (
    <>
     
  
       <Routes>
       
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        
      </Routes> 
  
  </>

  
    
    
  )
}
