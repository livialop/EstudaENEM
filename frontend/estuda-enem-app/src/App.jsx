import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import AreaInicial from "./pages/AreaInicial";
import { AuthProvider } from "./pages/areausuario/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/areausuario" element={<Perfil />} />
          <Route path="/areainicial" element={<AreaInicial />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;