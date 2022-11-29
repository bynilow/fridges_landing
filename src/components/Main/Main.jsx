import s from './Main.module.css'
import CommunicationSectionD from "./CommunicationSection/CommunicationSectionD";
import PriceRepairD from "./PriceRepair/PriceRepairD";
import HowWorks from './HowWorks/HowWorks';
import Fridges from './Fridges/Fridges';
import Reviews from './Reviews/Reviews';
import ReceptionMaster from './ReceptionMaster/ReceptionMaster';
import Footer from './Footer/Footer';

function Main({width}) {
    return (
        <div className="main">
            <CommunicationSectionD />
            <PriceRepairD />
            <HowWorks />
            <ReceptionMaster />
            <Fridges />
            <Reviews width={width} />
            <Footer />
        </div>
    );
}

export default Main;