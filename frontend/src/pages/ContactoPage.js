import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css';
import Container from 'react-bootstrap/Container';
import {Form,Button} from 'react-bootstrap';

import SocialNav from '../components/SocialNav';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    }

    const [validated, setValidated] = useState(false);
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState([]);
    const [formData,setFormData] = useState(initialForm);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);

        if (e.currentTarget.checkValidity() === true) {
            setMsg([]);

            setSending(true);
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            
            if(response.data.success === true){
                setMsg(<div className="alert alert-success">{response.data.message}</div>);
                setFormData(initialForm);
                setValidated(false);
            }
            else{
                setMsg(<div className="alert alert-danger">Ocurrió un error al enviar tu mensaje.</div>);
            }
        }
    };

    return (
        <Container id="contacto" as="main">
            <h1>Contacto</h1>

            <SocialNav />

            <section className='max-container'>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control type="text" placeholder="Juan Carlos" name="nombre" value={formData.nombre} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá tu nombre y apellido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="+54 11 1234-5678" name="telefono" value={formData.telefono} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá tu teléfono.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="juan@carlos.com" name="email" value={formData.email} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá un email válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" placeholder="Tu consulta" name="mensaje" value={formData.mensaje} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá tu mensaje.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {msg? <div className='my-4'>{msg}</div> : null}

                    <Button variant="primary text-white" type="submit">
                        {sending? 'Enviando...' : 'Enviar consulta'}
                    </Button>
                </Form>

            </section>
        </Container>
    );
}

export default ContactoPage;