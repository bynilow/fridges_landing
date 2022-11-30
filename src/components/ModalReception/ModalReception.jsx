import { useRef, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import s from './ModalReception.module.css';
import emailjs from '@emailjs/browser'

function ModalReception({ closeModal }) {

    const formRef = useRef(null);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [model, setModel] = useState('');
    const [adress, setAdress] = useState('');
    const [hours, setHours] = useState('15');
    const [minutes, setMinutes] = useState('30');
    const [checkbox, setCheckbox] = useState(false);
    const [isSended, setIsSended] = useState(false);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangePhone = (e) => {
        if (!(isNaN(e.target.value))) setPhone(e.target.value);
    }
    const onChangeModel = (e) => {
        setModel(e.target.value)
    }

    const onClickSend = (e) => {
        if (name.length > 3
            && phone.length > 10 && phone.length < 17
            && checkbox
            && model.length > 3
            && adress.length > 3) {
            e.preventDefault();
            const data = {
                name,
                phone,
                model,
                adress,
                hours,
                minutes
            }
            emailjs.send('service_3c9xl7c', 'template_k3byxxr', data, 'nHRYZHisOZvEcWkBu');
            setIsSended(true);

        }
    }

    const onChangeCheckbox = (e) => {
        console.log(e.target.checked)
        setCheckbox(e.target.checked);
    }

    const hoursSelect = [];
    for (let i = 7; i < 23; i++) {
        hoursSelect.push(
            <option className={s.option} value={i}>
                {i}
            </option>
        )
    }

    const minutesSelect = [];
    for (let i = 0; i < 60; i += 5) {
        minutesSelect.push(
            <option className={s.option} value={i < 10 ? '0' + i : i}>
                {i < 10 ? '0' + i : i}
            </option>
        )
    }


    return (
        <div className={s.modal}>
            {
                isSended
                    ? 
                    <div className={s.sended_block}>
                        <img
                            onClick={closeModal}
                            className={s.close}
                            src="images/close_icon.png"
                            alt="Закрыть окно заявки" />
                        <h1>Успешно отправлено!</h1>
                    </div>
                    :
                    <form className={s.form} ref={formRef} onSubmit="return false">
                        <h2>
                            Оставьте заявку
                        </h2>
                        <img
                            onClick={closeModal}
                            className={s.close}
                            src="images/close_icon.png"
                            alt="Закрыть окно заявки" />
                        <div className={s.inputs}>
                            <input
                                className={s.input}
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={onChangeName}
                                minLength="3"
                                maxLength="50"
                                required />
                            <input
                                className={s.input}
                                type="tel"
                                placeholder="Номер телефона"
                                maxLength="16"
                                minLength="11"
                                required
                                value={phone}
                                onChange={onChangePhone} />
                            <input
                                className={s.input}
                                type="text"
                                placeholder="Модель"
                                required
                                maxLength="50"
                                value={model}
                                onChange={onChangeModel} />
                            <input
                                className={s.input}
                                type="text"
                                placeholder="Адрес"
                                required
                                maxLength="80"
                                value={adress}
                                onChange={e => setAdress(e.target.value)} />
                            <div className={s.select_div}>
                                <p className={s.select_p}>
                                    Удобное время для осмотра
                                </p>
                                <select value={hours} onChange={e => setHours(e.target.value)}>
                                    {
                                        hoursSelect
                                    }
                                </select>
                                <select value={minutes} onChange={e => setMinutes(e.target.value)}>
                                    {
                                        minutesSelect
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={s.checkbox}>
                            <input
                                type="checkbox"
                                name="agree"
                                required
                                checked={checkbox}
                                onChange={onChangeCheckbox} />
                            <label htmlFor="agree">
                                Согласен на обработку данных в соответствии с Политикой конфиденциальности
                            </label>
                        </div>
                        <button className={s.btn} onClick={onClickSend}>
                            Вызвать мастера
                        </button>
                    </form>
            }
        </div>
    );
}

export default ModalReception;