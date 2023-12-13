import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef() as any
    const position: [number, number] = [43.607891865606824, 3.886308068664881]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('', '', form.current, '')
            .then((result) => {
                console.log(result.text);
                alert('Message successfully sent!')
                window.location.reload(false)
            }, (error) => {
                alert('Failed to send the message, please try again')
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Actuellement en recherche d'une alternance pour janvier 2024,
                        je suis disponible pour toute opportunité dans le domaine du développement web que ce soit en front-end ou en back-end.
                        Si vous avez d'autres questions, demandes ou bien si vous souhaitez simplement me contacter,
                        n'hésitez pas à remplir le formulaire juste en dessous ou à m'envoyer un mail à l'adresse suivante : <a className="contact-mail" href="mailto:allan.thvgs@gmail.com">allan.thvgs@gmail.com</a>
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Allan Thamvongs,
                    <br />
                    France,
                    <br />
                    34000 Montpellier
                    <br />
                    <span>allan.thvgs@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={14}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>
                                Allan is currently working here !
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    )
}

export default Contact