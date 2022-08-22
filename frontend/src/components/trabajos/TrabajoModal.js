import {useState, useEffect} from 'react';
import axios from 'axios';

import {Modal, Button, CloseButton} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faExternalLink } from '@fortawesome/free-solid-svg-icons';

const TrabajoModal = (props) =>{

    const [loading, setLoading] = useState(false);
    const [trabajo, setTrabajo] = useState([]);

    useEffect(()=>{
        const cargarTrabajo = async()=>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/trabajos/'+props.id);
            setTrabajo(response.data);
            setLoading(false);
        };
        cargarTrabajo();
        // eslint-disable-next-line
    },[]);

    return(
        <>
        {
            loading?
                (<p><img src='/assets/img/loading.svg' alt='Loading...'/></p>):
                (
                    <Modal show={true} backdrop="static" keyboard={false} size="lg" scrollable={true}>
                        <CloseButton onClick={props.onCloseModal} />

                        <Modal.Body className='row'>
                            <div className='content-main col-md-6'>
                                <h2>{trabajo.titulo}</h2>
                                <h3>{trabajo.subtitulo}</h3>
                                <hr/>

                                <p>
                                    Año {trabajo.anio}<br/>
                                    <strong>{trabajo.tecnologia}</strong><br/>
                                    {trabajo.estudio}<br/>
                                </p>
                                <div dangerouslySetInnerHTML={{__html:trabajo.descripcion}} />

                                {trabajo.url? (<p><Button href={trabajo.url} target='_blank' rel='noreferrer' className='text-white'><FontAwesomeIcon icon={faExternalLink} /> Ver trabajo</Button></p>) : ('')}

                                <hr/>
                                <p>
                                    <Button size="sm" variant="secondary" onClick={()=>props.onLoadTrabajo(props.id,"anterior")}><FontAwesomeIcon icon={faAngleLeft} /> Anterior</Button>
                                    &nbsp;&nbsp;
                                    <Button size="sm" variant="secondary" onClick={()=>props.onLoadTrabajo(props.id,"siguiente")}>Siguiente <FontAwesomeIcon icon={faAngleRight} /></Button>
                                </p>
                            </div>
                            <div className='col-md-6 p-0 container-image'>
                                <img src={trabajo.imagen_trabajo} alt={trabajo.titulo} className='img-fluid' />
                            </div>
                        </Modal.Body>
                    </Modal>
                )
        }
        </>
    );
}

export default TrabajoModal;