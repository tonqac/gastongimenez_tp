import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialNav = (props) => {
    return(
        <ul className='SocialNav'>
            <li><a href="https://wa.me/+5491157641521?text=Hola+Gastón"  rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /> </a></li>
            <li><a href="https://www.linkedin.com/in/gastongimenez/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
            <li><a href="mailto:hola@gastongimenez.com" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} /> </a></li>
        </ul>
    );
}

export default SocialNav;