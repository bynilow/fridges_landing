import FridgeCard from './FridgeCard/FridgeCard';
import s from './Fridges.module.css'

function Fridges() {

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
        <section className={s.fridges_section}>
            <div className={s.container}>
                <h1>Мы ремонтируем все холодильники</h1>
                <div className={s.fridges}>
                    {
                        fridges.map((i,ind) => <FridgeCard key={ind} name={i} /> )
                    }
                </div>
                <div>
                    <h4>Не нашли марку своего холодильника?</h4>
                    <h6 className={s.repair_all_h6}>Ремонтируем все марки - звоните <span>+7 (904) 166-00-12</span></h6>
                </div>
            </div>
        </section>
     );
}

export default Fridges;