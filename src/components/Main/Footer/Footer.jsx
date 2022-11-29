import Logo from '../../Logo/Logo';
import s from './Footer.module.css'

function Footer() {
    return ( 
        <footer className={s.footer}>
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
                        +7(917)491-25-66
                    </p>
                    <p>
                        info-ekb@chin-chinim.ru
                    </p>
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
                <div className={s.nav_block}>
                    <p className={s.nav_p}>
                        Навигация
                    </p>
                    <a className={s.nav_a} href="">
                        Цены
                    </a>
                    <a className={s.nav_a} href="">
                        О нас
                    </a>
                    <a className={s.nav_a} href="">
                        Отзывы
                    </a>
                </div>
                <img className={s.ecb} src="images/ekb.jpg" alt="" />
            </div>
            <img className={s.ecb_mobile} src="images/ekb.jpg" alt="" />
        </footer>
     );
}

export default Footer;