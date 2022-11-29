import { useState } from 'react';
import ModalReception from '../../ModalReception/ModalReception';
import s from './CommunicationSectionD.module.css'

function CommunicationSectionD() {

    const [modalOpened, setModalOpened] = useState(false);

    const onCloseModal = () => {
        setModalOpened(false);
    }

    return (
        <section className={s.main_communication}>
            {
                modalOpened && <ModalReception closeModal={onCloseModal} />
            }
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.info_text}>
                        <h2>
                            Ремонт холодильников в Екатеринбурге
                        </h2>
                        <h4>
                            С выездом на дом - звоните <a className={s.number} href="tel:+7(917)491-2566">+7(917)491-2566</a>
                        </h4>
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
                            Частые скидки
                        </p>
                    </div>
                    <button className={s.btn} onClick={() => setModalOpened(true)}>
                        Оставить заявку
                    </button>
                </div>
                <img className={s.fridge} src="images/fridge.png" alt="" />
            </div>
        </section>
    );
}

export default CommunicationSectionD;