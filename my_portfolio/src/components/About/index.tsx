import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2800);
    
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Je m'appelle Allan, j'ai 20 ans et je suis développeur web full-stack. J'ai commencé à apprendre le développement web en 2019, et j'ai depuis appris à utiliser plusieurs technologies, dont Html, Css, JavaScript, Php et Python. J'ai également appris à utiliser des frameworks comme React, Symfony et Django, ainsi que des librairies comme Bootstrap et jQuery.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                    </div>

                </div>

            </div>
        </div>

    );
}

export default About