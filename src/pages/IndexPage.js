import '../styles/components/pages/IndexPage.css';
import Container from 'react-bootstrap/Container';

import SocialNav from '../components/SocialNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import {Button} from 'react-bootstrap';

const IndexPage = (props) => {
    return (
        <Container id="index" as="main">
            <section>
                <h3 className="foto"><img src="./assets/img/gastongimenez.jpg" alt="Gaston Gimenez" /></h3>
                <h1>Gastón Giménez</h1>
                <h2>Full-Stack Developer Sr.</h2>
                <p>
                    Soy emprendedor digital y llevo <strong>más de 15 años</strong> desarrollando
                    tecnología para crear nuevos proyectos y negocios.<br />
                    Disfruto trabajando con equipos chicos, multidisciplinarios y dinámicos.
                </p>
                <p>Amo el tetris y odio el copy paste.</p>
            </section>

            <section>
                <SocialNav />
                <p>
                    <Button variant="primary text-white rounded-pill px-3" href="http://gastongimenez.com/cv/GastonGimenez.pdf" target="_blank">
                        <FontAwesomeIcon icon={faDownload} /> Descargar CV
                    </Button>
                </p>
            </section>
        </Container>
    );
}

export default IndexPage;