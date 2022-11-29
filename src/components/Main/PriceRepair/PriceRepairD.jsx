import RepairCard from './RepairCard/RepairCard';
import s from './PriceRepairD.module.css'
import { useState } from 'react';
import ModalReception from '../../ModalReception/ModalReception';

function PriceRepairD() {

    const [modalOpened, setModalOpened] = useState(false);
    
    const onClickOpenModal = () => {
        setModalOpened(true)
    }

    const onClickCloseModal = () => {
        setModalOpened(false)
    }

    const repairNotFreeze = [
        {
            name: "Неисправен компрессор",
            requiredWorks: "замена",
            price: 1650
        },
        {
            name: "Неисправность пускового реле",
            requiredWorks: "замена",
            price: 450
        },
        {
            name: "Неисправность системы оттаивания (no frost)",
            requiredWorks: "замена элементов системы оттаивания",
            price: 900 
        },
        {
            name: "Утечка хладагента",
            requiredWorks: "устранение утечки, заправка фреоном/газом",
            price: 1370 
        },
        {
            name: "Неисправность сенсора",
            requiredWorks: "замена",
            price: 800 
        },
        {
            name: "Засор фильтра-осушителя",
            requiredWorks: "замена",
            price: 450 
        },
        {
            name: "Закупорка капиллярного трубопровода",
            requiredWorks: "устранение засора/замена",
            price: 1450 
        },
        {
            name: "Неисправность платы управления",
            requiredWorks: "ремонт/замена",
            price: 1500 
        }
    ]

    const repairSnowyCoat = [
        {
            name: "Износ уплотнителя на дверце",
            requiredWorks: "замена",
            price: 850
        },
        {
            name: "Утечка хладагента",
            requiredWorks: "устранение утечки, заправка фреоном/газом",
            price: 1370
        },
        {
            name: "Закупорка капиллярного трубопровода",
            requiredWorks: "устранение засора/замена",
            price: 1450 
        },
        {
            name: "Засор фильтра-осушителя",
            requiredWorks: "замена",
            price: 450 
        },
        {
            name: "Неисправен мотор-компрессор",
            requiredWorks: "замена",
            price: 1650 
        },
    ]

    const repairWater = [
        {
            name: "Неисправность системы оттаивания (no frost)",
            requiredWorks: "замена элементов системы оттаивания",
            price: 900 
        },
        {
            name: "Повреждение поддона сбора воды",
            requiredWorks: "ремонт/замена",
            price: 600
        },
        {
            name: "Засор дренажной системы",
            requiredWorks: "ремонт/замена",
            price: 500
        },
        {
            name: "Неисправность дренажного шланга",
            requiredWorks: "замена",
            price: 400 
        },
    ]

    const repairNoise = [
        {
            name: "Неисправен мотор-компрессор",
            requiredWorks: "замена",
            price: 1370 
        },
        {
            name: "Неисправность системы оттаивания (no frost)",
            requiredWorks: "замена элементов системы оттаивания",
            price: 900
        },
        {
            name: "Неисправность эл. двигателя вентилятора",
            requiredWorks: "ремонт/замена",
            price: 800
        },
        {
            name: "Износ амортизационных креплений",
            requiredWorks: "замена",
            price: 500 
        },
    ]

    const repairEnableDisable = [
        {
            name: "Неисправность пускового реле",
            requiredWorks: "замена",
            price: 450 
        },
        {
            name: "Неисправен датчик-реле температуры",
            requiredWorks: "замена",
            price: 750
        },
        {
            name: "Неисправность платы управления",
            requiredWorks: "ремонт/замена",
            price: 1500
        },
        {
            name: "Неисправен мотор-компрессор",
            requiredWorks: "замена",
            price: 1650 
        },
        {
            name: "Неисправность системы оттаивания (no frost)",
            requiredWorks: "замена элементов системы оттаивания",
            price: 900
        },
        {
            name: "Повреждение эл. проводки холодильника",
            requiredWorks: "ремонт/замена",
            price: 800
        },
    ]


    return (
        <section >
            {
                modalOpened && <ModalReception closeModal={onClickCloseModal} />
            }
            <div className={s.container}>
                <h2>
                    Цены на ремонт
                </h2>
                <h3>
                    Цены актуальны на <span>{new Date().toLocaleDateString()}</span>
                </h3>
                <div className={s.technics}>
                    <div className={s.name_technic}>
                        <h5>Холодильник не морозит</h5>
                    </div>
                    <div className={s.repair_info}>
                        <p>
                            Неисправность
                        </p>
                        <p className={s.requiredWorks_p}>
                            Необходимые работы
                        </p>
                        <p className={s.info_price}>
                            Цена
                        </p>
                        <p className={s.info_empty} />
                    </div>
                    {
                        repairNotFreeze.map((i, ind) => <RepairCard
                            key={ind}
                            name={i.name}
                            requiredWorks={i.requiredWorks}
                            price={i.price}
                            color={ind % 2}
                            openModal={onClickOpenModal} />)
                    }

                    <div className={s.name_technic}>
                        <h5>Снежная "шуба" внутри холодильника</h5>
                    </div>
                    {
                        repairSnowyCoat.map((i, ind) => <RepairCard
                            key={ind}
                            name={i.name}
                            requiredWorks={i.requiredWorks}
                            price={i.price}
                            color={ind % 2}
                            openModal={onClickOpenModal} />)
                    }


                    <div className={s.name_technic}>
                        <h5>Вода под холодильником или внутри</h5>
                    </div>
                    {
                        repairWater.map((i, ind) => <RepairCard
                            key={ind}
                            name={i.name}
                            requiredWorks={i.requiredWorks}
                            price={i.price}
                            color={ind % 2}
                            openModal={onClickOpenModal} />)
                    }

                    <div className={s.name_technic}>
                        <h5>Повышенный шум в холодильнике</h5>
                    </div>
                    {
                        repairNoise.map((i, ind) => <RepairCard
                            key={ind}
                            name={i.name}
                            requiredWorks={i.requiredWorks}
                            price={i.price}
                            color={ind % 2}
                            openModal={onClickOpenModal} />)
                    }

                    <div className={s.name_technic}>
                        <h5>Включается и "сразу отключается"</h5>
                    </div>
                    {
                        repairEnableDisable.map((i, ind) => <RepairCard
                            key={ind}
                            name={i.name}
                            requiredWorks={i.requiredWorks}
                            price={i.price}
                            color={ind % 2}
                            openModal={onClickOpenModal} />)
                    }

                </div>
            </div>
        </section>
    );
}

export default PriceRepairD;