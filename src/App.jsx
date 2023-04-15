import { useState } from 'react'
import Login from './conponenets/Login'
import Signup from './conponenets/Signup'
import Homepage from './conponenets/Homepage'
import useAuth, { AuthProvider } from './AuthContext';
import { BrowserRouter, Route, useNavigate, Routes } from 'react-router-dom';


function AppRouter() {
  const { user, login } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Homepage /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {

  return (
    <div >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}

export default App
