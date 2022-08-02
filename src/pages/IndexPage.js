import '../styles/components/pages/IndexPage.css';

import Container from 'react-bootstrap/Container';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const IndexPage = (props) => {
    return(
        <Container id="index">
            <h3 className="foto"><img src="./assets/img/gastongimenez.jpg" alt="Gaston Gimenez"/></h3>
            <h1>Gastón Giménez</h1>
            <h2>Full-Stack Developer Sr.</h2>
            <p>
                Soy emprendedor digital y llevo <strong>más de 15 años</strong> desarrollando
                tecnología para crear nuevos proyectos y negocios.<br/>
                Disfruto trabajando con equipos chicos, multidisciplinarios y dinámicos.
            </p>
            <p>Amo el tetris y odio el copy paste.</p>
            <ul>
                <li><a href="mailto:hola@gastongimenez.com" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} /> </a></li>
                <li><a href="https://www.linkedin.com/in/gastongimenez/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> </a></li>
            </ul>
            <p>
                <a className="btn btn-primary text-white rounded-pill px-3" href="http://gastongimenez.com/cv/GastonGimenez.pdf" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faDownload} /> Descargar CV
                </a>
            </p>
        </Container>
    );
}

export default IndexPage;