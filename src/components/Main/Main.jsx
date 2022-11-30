import s from './Main.module.css'
import CommunicationSectionD from "./CommunicationSection/CommunicationSectionD";
import PriceRepairD from "./PriceRepair/PriceRepairD";
import HowWorks from './HowWorks/HowWorks';
import Fridges from './Fridges/Fridges';
import Reviews from './Reviews/Reviews';
import ReceptionMaster from './ReceptionMaster/ReceptionMaster';
import Footer from './Footer/Footer';
import { useRef } from 'react';
import Header from '../Header/Header';

function Main({ width }) {

    const sections = ["main", "prices", "about", "brands", "reviews", "contacts"];

    const mainRef = useRef(null)
    const pricesRef = useRef(null)
    const aboutRef = useRef(null)
    const brandsRef = useRef(null)
    const reviewsRef = useRef(null)
    const contactsRef = useRef(null)

    const scrollToSection = (section) => {

        let eRef = null;

        switch (section) {
            case 'main':
                eRef = mainRef;
                break;
            case 'prices':
                eRef = pricesRef;
                break;
            case 'about':
                eRef = aboutRef;
                break;
            case 'brands':
                eRef = brandsRef;
                break;
            case 'reviews':
                eRef = reviewsRef;
                break;
            case 'contacts':
                eRef = contactsRef;
                break;
            default:
                break;
        }

        window.scrollTo({
            top: eRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div className="main">
            <Header onClickLink={scrollToSection} />
            <CommunicationSectionD myref={mainRef} />
            <PriceRepairD myref={pricesRef} />
            <HowWorks myref={aboutRef} />
            <ReceptionMaster />
            <Fridges myref={brandsRef} />
            <Reviews myref={reviewsRef} />
            <Footer myref={contactsRef} onClickLink={scrollToSection} />
        </div>
    );
}

export default Main;