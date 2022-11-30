import { FIRST_NUMBER } from '../../../consts/consts';
import FridgeCard from './FridgeCard/FridgeCard';
import s from './Fridges.module.css'

function Fridges({myref}) {

    const fridges = [
        'aeg',
        'ardo',
        'ariston',
        'atlant',
        'beko',
        'bosh',
        'candy',
        'daewoo',
        'electrolux',
        'goldstar',
        'gorenje',
        'indesit',
        'lg',
        'national',
        'nord',
        'samsung',
        'sharp',
        'shivaki',
        'siemens',
        'stinol',
        'snaige',
        'supra',
        'vesfrost',
        'whirlpool',
        'zanussi'
    ]

    return ( 
        <section className={s.fridges_section} ref={myref}>
            <div className={s.container}>
                <h1>Мы ремонтируем все холодильники</h1>
                <div className={s.fridges}>
                    {
                        fridges.map((i,ind) => <FridgeCard key={ind} name={i} /> )
                    }
                </div>
                <div className={s.bottom_text}>
                    <h4>Не нашли марку своего холодильника?</h4>
                    <h2 className={s.repair_all_h2}>Ремонтируем все марки <span>{FIRST_NUMBER}</span></h2>
                </div>
            </div>
        </section>
     );
}

export default Fridges;