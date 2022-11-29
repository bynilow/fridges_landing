import s from './RepairCard.module.css'

function RepairCard({name, requiredWorks, price, color = 0, openModal, closeModal}) {
    return ( 
        <div className={`${s.card} ${color === 0 ? s.white_card : s.gray_card}`}>
            <p>
                { name }
            </p>
            <p className={s.requiredWorks_p}>
                { requiredWorks }
            </p>
            <p className={s.price}>
                от { price } руб.
            </p>
            <button className={s.order_button} onClick={openModal}>
                Заказать
            </button>
        </div>
     );
}

export default RepairCard;