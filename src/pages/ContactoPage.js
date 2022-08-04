import { useState } from 'react';

import '../styles/components/pages/ContactoPage.css';
import Container from 'react-bootstrap/Container';

import SocialNav from '../components/SocialNav';

import {Form,Button} from 'react-bootstrap';

const ContactoPage = (props) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container id="contacto" as="main">
            <h1>Contacto</h1>

            <SocialNav />

            <section className='max-container'>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control type="text" placeholder="Juan Carlos" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá tu nombre y apellido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="+54 11 1234-5678" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá tu teléfono.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="juan@carlos.com" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá un email válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" placeholder="Tu consulta" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá tu mensaje.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary text-white" type="submit">
                        Enviar consulta
                    </Button>
                </Form>
            </section>
        </Container>
    );
}

export default ContactoPage;