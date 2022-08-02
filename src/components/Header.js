import '../styles/components/Header.css';
import Logo from './Logo';

import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    return(
        <header>
            <Navbar bg="dark" variant="dark">
                <Container className='justify-content-center'>
                    <Navbar.Brand href="/">
                        <Logo width="40" height="40" />
                    </Navbar.Brand>

                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">Inicio</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/trabajos">Trabajos</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/clientes">Clientes</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/skills">Skills</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/contacto">Contacto</NavLink></li>
                    </ul>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;