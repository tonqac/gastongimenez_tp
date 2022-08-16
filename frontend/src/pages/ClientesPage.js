import '../styles/components/pages/ClientesPage.css';
import Container from 'react-bootstrap/Container';

const data = require('../data/clientes.json');

const Cliente = ({obj}) =>{
    return (
        <li className='col-6 col-md-4 col-lg-2'>
            <img src={'/assets/img/clientes/'+obj.imagen} alt={obj.nombre} title={obj.nombre} />
            <h4 className='text-muted'>{obj.nombre}</h4>
        </li>
    );
}

const ClientesPage = (props) => {
    return(
        <Container id="clientes" as="main">
            <h1>Clientes</h1>

            <section>
                <ul>
                    {data.map((obj,key) => (
                        <Cliente key={key} obj={obj} />
                    ))}
                </ul>
            </section>

        </Container>
    );
}

export default ClientesPage;