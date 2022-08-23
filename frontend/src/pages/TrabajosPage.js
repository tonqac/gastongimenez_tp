import {useState, useEffect} from 'react';
import axios from 'axios';

import TrabajoItem from '../components/trabajos/TrabajoItem';
import TrabajoModal from '../components/trabajos/TrabajoModal';

import '../styles/components/pages/TrabajosPage.css';

import Container from 'react-bootstrap/Container';

const TrabajosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [trabajos, setTrabajos] = useState([]);

    const [modalContent, setModalContent] = useState([]);

    useEffect(()=>{
        const cargarTrabajos = async()=>{
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/trabajos`);
            setTrabajos(response.data);
            setLoading(false);
        };

        cargarTrabajos();
    },[]);
    
    const openModal = (id)=>{
        setModalContent([<TrabajoModal key={id} id={id} onCloseModal={closeModal} onLoadTrabajo={loadTrabajo} />]);
    }

    const closeModal = ()=>{
        setModalContent([]);
    }

    const loadTrabajo = (id,dir)=>{
        let i = trabajos.findIndex(e=> e.id === id);

        if(dir==="anterior"){
            i--;
            if(i<0) i = trabajos.length-1;
        }
        else{
            i++;
            if(i===trabajos.length) i = 0;
        }
        
        closeModal();
        openModal(trabajos[i].id);
    }

    return(
        <Container id="trabajos" as="main">
            <h1>Trabajos</h1>

            <section className="items">
                {
                    loading?
                        (<p><img src='/assets/img/loading.svg' alt='Loading...'/></p>):
                        (
                            trabajos.map(item=>
                                <TrabajoItem onPress={openModal} key={item.id} id={item.id} titulo={item.titulo} subtitulo={item.subtitulo} imagen_principal={item.imagen_principal} destacado={item.destacado} />
                            )
                        )
                }
            </section>

            <section id="modal">{modalContent}</section>
        </Container>
    );
}

export default TrabajosPage;