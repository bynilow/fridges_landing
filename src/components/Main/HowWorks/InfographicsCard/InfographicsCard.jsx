import s from './InfographicsCard.module.css'

function InfographicsCard({ description, ind, photo, alt }) {
    return (
        <div className={s.card}>
            <div className={s.overflow} />
            <div className={s.ind}>
                <p>
                    {ind}
                </p>
            </div>
            <img src={photo} alt={alt} />
            <div className={`${s.description_block} ${ind % 2 === 0 ? s.top : s.down}`}>
                <p className={s.description}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default InfographicsCard;