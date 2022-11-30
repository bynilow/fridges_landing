import { useState } from 'react';
import { FIRST_NUMBER } from '../../../consts/consts';
import ModalReception from '../../ModalReception/ModalReception';
import s from './CommunicationSectionD.module.css'

function CommunicationSectionD({myref}) {

    const [modalOpened, setModalOpened] = useState(false);

    const onCloseModal = () => {
        setModalOpened(false);
    }

    const openCallText = `tel:${FIRST_NUMBER}`;

    return (
        <section className={s.main_communication} ref={myref}>
            {
                modalOpened && <ModalReception closeModal={onCloseModal} />
            }
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.info_text}>
                        <h1>
                            Ремонт холодильников в Екатеринбурге
                        </h1>
                        <h2 className={s.to_home_h2}>
                            С выездом на дом - звоните
                        </h2>
                        <h2 className={s.whatsapp_number_h2}>
                            <img className={s.whatsapp} src="images/whatsapp_icon.png" alt="WhatsApp иконка" /> 
                            <a className={s.number} href={`tel:${FIRST_NUMBER}`}>
                                {FIRST_NUMBER}
                            </a>
                        </h2>
                    </div>
                    <div className={s.features}>
                        <p>
                            Выезд по городу в течении 30 мин.
                        </p>
                        <p>
                            Гарантия до 3х лет
                        </p>
                        <p>
                            Ремонт в день обращения
                        </p>
                        <p>
                            Выезд и диагностика - бесплатно
                        </p>
                        <p>
                            Выезд по городу в течении 30 мин.
                        </p>
                        <p>
                            Постоянная поддержка
                        </p>
                    </div>
                    <button className={s.btn} onClick={() => setModalOpened(true)}>
                        Оставить заявку
                    </button>
                </div>
                <img className={s.fridge} src="images/fridge.png" alt="Ремонт холодильников" />
            </div>
        </section>
    );
}

export default CommunicationSectionD;