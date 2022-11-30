import s from './ReviewCard.module.css'

function ReviewCard({name, rating, description}) {

    let stars = []
    for(let i = 0; i < rating; i++){
        stars.push(<img className={s.star} src="images/star_icon.png" alt="Оценка отзыва" />)
    }

    return ( 
        <div className={s.card}>
            <div className={s.info}>
                <div className={s.name_stars}>
                    <p className={s.name}>
                        {name}
                    </p>
                    <div className={s.stars}>
                        {stars}
                    </div>
                </div>
                <p className={s.date}>
                    {new Date().toLocaleString('ru-RU',{day:'numeric', month:'long'})}
                </p>
            </div>
            <p className={s.description}> 
                {description}
            </p>
        </div>
     );
}

export default ReviewCard;