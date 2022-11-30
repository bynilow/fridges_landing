import { EMAIL, FIRST_NUMBER } from '../../../consts/consts';
import Logo from '../../Logo/Logo';
import s from './Footer.module.css'

function Footer({myref, onClickLink}) {
    return ( 
        <footer className={s.footer} ref={myref}>
            <div className={s.container}>
                <div className={s.logo_block}>
                    <h2>Холодильники</h2>
                    <p>
                        Ремонт холодильников в Екатеринбурге
                    </p>
                </div>
                <div className={s.contacts_block}>
                    <p className={s.contacts_p}>
                        Контакты
                    </p>
                    <p>
                        {FIRST_NUMBER}
                    </p>
                    <p>
                        {EMAIL}
                    </p>
                    
                </div>
                <div className={s.nav_block}>
                    <p className={s.nav_p}>
                        Навигация
                    </p>
                    <p className={s.nav_a} onClick={() => onClickLink('main')}>
                        Главная
                    </p>
                    <p className={s.nav_a} onClick={() => onClickLink('prices')}>
                        Цены
                    </p>
                    <p className={s.nav_a} onClick={() => onClickLink('about')}>
                        О нас
                    </p>
                    <p className={s.nav_a} onClick={() => onClickLink('brands')}>
                        Бренды
                    </p>
                    
                </div>
                <div className={s.time_block}>
                    <p className={s.time_p}>
                        Время работы
                    </p>
                    <p>
                        Ежедневно
                    </p>
                    <p>
                        7:00-22:00
                    </p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;