import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import IndexPage from "./pages/IndexPage";
import TrabajosPage from "./pages/TrabajosPage";
import ClientesPage from "./pages/ClientesPage";
import SkillsPage from "./pages/SkillsPage";
import ContactoPage from "./pages/ContactoPage";

import './App.css';


function App() {
  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/trabajos" element={<TrabajosPage />} />
                <Route path="/clientes" element={<ClientesPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
