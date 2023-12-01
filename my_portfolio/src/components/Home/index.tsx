import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logoS.png';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'l', 'a', 'n', ',']
    const jobArray = ['D', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'w', 'e', 'b', '.']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        return () => {
            clearTimeout(timerId);
        };
    }, []);
    

    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1>
                <span className={letterClass}>S</span>
                <span className={`${letterClass} _04`}>a</span>
                <span className={`${letterClass} _05`}>l</span>
                <span className={`${letterClass} _06`}>u</span>
                <span className={`${letterClass} _07`}>t</span>
                <span className={letterClass}> </span>
                <span className={`${letterClass} _08`}>!</span>
                <br />
                <span className={`${letterClass} _09`}>J</span>
                <span className={`${letterClass} _10`}>e</span>
                <span className={letterClass}> </span>
                <span className={`${letterClass} _11`}>s</span>
                <span className={`${letterClass} _12`}>u</span>
                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>s</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19}/>
                </h1>
                <h2>Développeur Full-Stack (principalement Html, Css, JavaScript, Php et Python)</h2>
                <Link to="/contact" className='flat-button'>CONTACTEZ-MOI !</Link>
            </div>
            <Logo />

        </div>
    );
}

export default Home;