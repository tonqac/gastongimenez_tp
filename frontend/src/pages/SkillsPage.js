import '../styles/components/pages/SkillsPage.css';
import Container from 'react-bootstrap/Container';

const data = require('../data/skills.json');

const Skill = ({obj}) =>{
    obj.puntos = parseInt(obj.puntos);
    if(obj.puntos<1 || obj.puntos>3) obj.puntos = 1;

    return (
        <li className={'s'+obj.puntos}>
            {obj.nombre} <span></span>
        </li>
    );
}

const SkillsPage = (props) => {
    return(
        <Container id="skills" as="main">
            <h1>Skills</h1>

            <section className='max-container'>
                <ul>
                    {data.map((obj,key) => (
                        <Skill key={key} obj={obj} />
                    ))}
                </ul>
            </section>

        </Container>
    );
}

export default SkillsPage;