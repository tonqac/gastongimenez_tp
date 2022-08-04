import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import IndexPage from "./pages/IndexPage";
import TrabajosPage from "./pages/TrabajosPage";
import ClientesPage from "./pages/ClientesPage";
import SkillsPage from "./pages/SkillsPage";
import ContactoPage from "./pages/ContactoPage";

import './App.css';

const routes = [
    { path: '/', name: 'Home', component: IndexPage },
    { path: '/trabajos', name: 'Trabajos', component: TrabajosPage },
    { path: '/clientes', name: 'Clientes', component: ClientesPage },
    { path: '/skills', name: 'Skills', component: SkillsPage },
    { path: '/contacto', name: 'Contacto', component: ContactoPage },
];

function App() {
    return (
        <>
            <BrowserRouter>
                <Header routes={routes} />
                <Routes>
                    {routes.map((route,key) => (
                        <Route key={key} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
