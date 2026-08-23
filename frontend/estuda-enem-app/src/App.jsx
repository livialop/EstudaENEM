import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;