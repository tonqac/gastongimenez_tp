import '../styles/components/Header.css';
import Logo from './Logo';

import { NavLink } from "react-router-dom";

import {Container,Navbar,Nav} from 'react-bootstrap';

const Header = ({routes}) => {

    return(
        <header>
            <Navbar bg="dark" variant="dark">
                <Container className='justify-content-center'>
                    <Navbar.Brand href="/">
                        <Logo width="40" height="40" />
                    </Navbar.Brand>

                    <Nav as="ul">
                        {routes.map((route,key) => (
                            <Nav.Item as="li" key={key}>
                                <Nav.Link as={NavLink} className={({ isActive }) => (isActive ? "active" : "")} to={route.path}>{route.name}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;