import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/logoA.png'
import sublogo from '../../assets/images/sublogoA.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook, faClose, faEnvelope, faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoA} alt="logo" />
            <img src={sublogo} alt="sublogo" className="sub-logo" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} className="about-link" to="/about">
                <FontAwesomeIcon icon={faBook} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon'
            />

        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/allan-thamvongs/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Allrito'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>

        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />

    </div>
    )
}
export default Sidebar