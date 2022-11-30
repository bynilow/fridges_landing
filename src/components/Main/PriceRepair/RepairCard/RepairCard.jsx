import s from './RepairCard.module.css'

function RepairCard({name, requiredWorks, price, color = 0, openModal, closeModal}) {
    return ( 
        <div className={`${s.card} ${color === 0 ? s.white_card : s.gray_card}`}>
            <p className={s.name}>
                { name }
            </p>
            <p className={s.requiredWorks_p}>
                { requiredWorks }
            </p>
            <p className={s.price}>
                от { price } руб.
            </p>
            <div className={s.order_button} onClick={openModal}>
                Заказать
            </div>
        </div>
     );
}

export default RepairCard;