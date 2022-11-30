import s from './InfographicsCard.module.css'

function InfographicsCard({ description, ind, photo, alt }) {
    return (
        <div className={`${s.card} ${ind % 2 === 0 ? s.card_right : s.card_left}`}>
            <div className={s.overflow} />
            <div className={`${s.ind} ${ind % 2 === 0 ? s.ind_left : s.ind_right}`}>
                <p>
                    {ind}
                </p>
            </div>
            <img src={photo} alt={alt} />
            <div className={`${s.description_block} ${ind % 2 === 0 ? s.description_top : s.description_down}`}>
                <p className={s.description}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default InfographicsCard;