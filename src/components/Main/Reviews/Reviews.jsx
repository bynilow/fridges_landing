import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import ReviewCard from './ReviewCard/ReviewCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import s from './Reviews.module.css'

function Reviews({width}) {

    const reviews = [
        {
            name: 'Ольга Никитина',
            date: null,
            rating: 5,
            description: `Всё отлично! Специалист приехал через час после заявки.`
        },
        {
            name: 'Татьяна Золотова',
            date: null,
            rating: 5,
            description: `
                Позвонила, мастер приехал так быстро что я не успела подготовить холодильник. 
                В субботу утром он растаял и отключился. Ремонт длился минут сорок. 
                Ремонтник заменил деталь холодильник заработал как прежде. 
                Я проверила морозильник начал холодить. Большое спасибо за скорый ремонт в выходной день.
            `
        },
        {
            name: 'Светлана Мифтахова',
            date: null,
            rating: 5,
            description: `
                Ремонт произвели не выходя из дома. 
                Объяснила ситуацию, получила рекомдации и моя холод.камера работает как часы. 
                Спасибо.
            `
        },
        {
            name: 'Виктория О.',
            date: null,
            rating: 5,
            description: `
                Позвонила в мастерскую и оставила заявку на ремонт холодильника BOSCH, 
                мастер не заставил долго ждать и перезвонил через три минуты. 
                Мы договорились и спустя час мастер приехал и осмотрел холодильник, выяснилось что сгорел мотор. 
                Я была согласна сделать ремонт да и цена меня устроила. 
                Мастер Юрий заменил сгоревший мотор на новый и через полутора часа я использовала холодильник. 
                Спасибо за скорый ремонт.
            `
        },
        {
            name: 'Игорь Шип',
            date: null,
            rating: 5,
            description: `
                Оставили заявку на ремонт холодильника Ariston, мастер приехал к нам довольно быстро. 
                Сделал диагностику, выяснилось следующее: произошла утечка фреона из морозильника; 
                холодильнику восемь лет. Заправил нам фреоном морозильную камеру. 
                И ешё заменил нам уплотнитель на стареньком холодильнике Stinol. 
                Ремонтом мы остались довольны и цена недорогая в отличии от некоторых фирм в городе.
            `
        },
        {
            name: 'Анна Рамина',
            date: null,
            rating: 5,
            description: `
                Спасибо за ремонт очень помогли нам в новогодние праздники а то без холодильника ка без рук и 
                спасибо большое мастеру что скидку нам хорошую сделал в честь рождества)
            `
        },
    ]

    const items =
        reviews.map((i, ind) =>
            <ReviewCard
                key={ind}
                name={i.name}
                rating={i.rating}
                description={i.description} />);

    const responsive = {
        550: { items: 1 },
        760: { items: 2 },
        1000: { items: 3 },
    };

    const [indSelected, setIndSelected] = useState(0) 

    const onClickNext = () => {
        if(indSelected < reviews.length-1) setIndSelected(indSelected + 1);
        else setIndSelected(0);
    }
    const onClickPrev = () => {
        if(indSelected > 1) setIndSelected(indSelected - 1);
        else setIndSelected(reviews.length-1);
    }
    

    return (
        <section className={s.reviews_section}>

            <div className={s.container}>
                <h1 className={s.reviews_h1}>Отзывы о нас:</h1>
                <div className={s.slider}>
                    <AliceCarousel
                        className={s.al_car}
                        disableDotsControls
                        disableButtonsControls
                        infinite
                        responsive={responsive}
                        mouseTracking
                        activeIndex={indSelected}
                        items={items} />
                </div>
                <div className={s.arrows}>
                    <img 
                        onClick={onClickPrev}
                        className={`${s.arrow} ${s.prev}`} 
                        src="images/arrow_icon.png" 
                        alt="" />
                    <img 
                        onClick={onClickNext}
                        className={`${s.arrow} ${s.next}`} 
                        src="images/arrow_icon.png" 
                        alt="" />
                </div>
            </div>
        </section>
    );
}

export default Reviews;