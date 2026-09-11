import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import AreaInicial from "./pages/AreaInicial";
import { AuthProvider } from "./pages/areausuario/AuthContext";
import ProtectedRoute from "./pages/areausuario/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/sobre" element={<Homepage />} />

          {/* Protected routes grouped under ProtectedRoute */}
          <Route element={<ProtectedRoute />}>
            <Route path="/areausuario" element={<Perfil />} />
            <Route path="/areainicial" element={<AreaInicial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;