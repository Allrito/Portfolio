import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faNode, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    return (
        <>
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
                        Je m'appelle Allan, j'ai 20 ans et je suis développeur web full-stack.
                    </p>
                    <p>
                        J'ai commencé à apprendre le développement web en 2019, et j'ai depuis appris à utiliser plusieurs technologies, dont Html, Css, JavaScript, Php et Python.
                    </p>
                    <p>
                        J'ai également appris à utiliser des frameworks comme React, NodeJS et Symfony, ainsi que des librairies comme Bootstrap et jQuery.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#e34f26' />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3Alt} color='#2299f8' />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faJs} color='#f0dc4e' />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faNode} color='#58a149' />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faReact} color='#149eca' />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faPhp} color='#7b7fb5' />
                        </div>

                    </div>

                </div>
            </div>
            <Loader type="ball-beat" innerClassName="spinny-loader" active={true} />
        </>
    );
}

export default About