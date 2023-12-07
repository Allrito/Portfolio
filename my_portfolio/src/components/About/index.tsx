import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={undefined}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Je m'appelle Allan, j'ai 20 ans et je suis développeur web full-stack. J'ai commencé à apprendre le développement web en 2019, et j'ai depuis appris à utiliser plusieurs technologies, dont Html, Css, JavaScript, Php et Python. J'ai également appris à utiliser des frameworks comme React, Symfony et Django, ainsi que des librairies comme Bootstrap et jQuery.
                </p>
            </div>
        </div>

    );
}

export default About