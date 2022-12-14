import { useState } from 'react';
import s from './ReceptionMaster.module.css'
import emailjs from '@emailjs/browser'

function ReceptionMaster() {

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
        if (!(isNaN(e.target.value))) setPhone(e.target.value)
    }

    const hoursSelect = [];
    for (let i = 7; i < 23; i++) {
        hoursSelect.push(
            <option key={i} className={s.option} value={i}>
                {i}
            </option>
        )
    }

    const minutesSelect = [];
    for (let i = 0; i < 60; i += 5) {
        minutesSelect.push(
            <option key={i} className={s.option} value={i < 10 ? '0' + i : i}>
                {i < 10 ? '0' + i : i}
            </option>
        )
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

    return (
        <section className={s.how_works_section}>
            {
                isSended
                    ?
                    <div className={s.success}>
                        <h2>Заявка успешно отправлена!</h2>
                        <h3>С вами свяжется специалист, спасибо</h3>
                    </div>
                    :
                    <div className={s.container}>
                        <div className={s.texts}>
                            <h1>
                                Оставьте заявку на вызов мастера
                            </h1>
                            <h2>
                                Заполните форму и мы с вами свяжемся!
                            </h2>
                        </div>
                        <form className={s.form}>
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
                                    onChange={e => setModel(e.target.value)} />
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
                                    onChange={e => setCheckbox(e.target.checked)} />
                                <label htmlFor="agree">
                                    Согласен на обработку данных в соответствии с Политикой конфиденциальности
                                </label>
                            </div>
                            <button className={s.btn} onClick={onClickSend}>
                                Вызвать мастера
                            </button>
                        </form>
                    </div>
            }


        </section>
    );
}

export default ReceptionMaster;