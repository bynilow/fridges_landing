import s from './HowWorks.module.css'
import InfographicsCard from './InfographicsCard/InfographicsCard';

function HowWorks() {
    return (
        <section className={s.how_works_section}>
            <div className={s.infographics_outer}>

                <svg className={s.svg_up} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,202.7C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>

                <svg className={s.svg_down} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,202.7C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>

                <h2 className={s.how_works_h}>
                    Как мы работаем
                </h2>
                <div className={s.infographics}>
                    <div className={s.container}>
                        <div className={s.dashed_steps} />

                        <InfographicsCard
                            description="Звонок или заявка на сайте"
                            ind={1}
                            photo={"images/phone_icon.png"} />

                        <InfographicsCard
                            description="В течении часа мы свяжемся с вами"
                            ind={2}
                            photo={"images/chat_icon.png"} />

                        <InfographicsCard
                            description="К вам приезжает мастер и выполняет работу"
                            ind={3}
                            photo={"images/cargo_icon.png"} />

                        <InfographicsCard
                            description="Вы принимаете результат работы и оплачиваете заказ"
                            ind={4}
                            photo={"images/card_icon.png"} />

                        <InfographicsCard
                            description="Готово!"
                            ind={5}
                            photo={"images/done_icon.png"} />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowWorks;