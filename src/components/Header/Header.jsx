import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import s from './header.module.css'

function Header({ onClickLink }) {

  return (
    <header>
      <div className={s.container}>
        <div className={s.logo_c} onClick={() => onClickLink('main')}>
          <img src="images/logo.svg" alt="Логотип починки холодильников" />
          <div className={s.logo_texts}>
            <p className={s.logo_top_text}>
              Ремонт холодильников
            </p>
            <p className={s.logo_name}>
              Холодильщик96
            </p>
          </div>
        </div>
        <div className={s.header_buttons}>
          <p className={s.header_link} onClick={() => onClickLink('prices')}>
            Цены
          </p>
          <p className={s.header_link} onClick={() => onClickLink('about')}>
            О нас
          </p>
          <p className={s.header_link} onClick={() => onClickLink('brands')}>
            Бренды
          </p>
          <p className={s.header_link} onClick={() => onClickLink('reviews')}>
            Отзывы
          </p>
          <p className={s.header_link} onClick={() => onClickLink('contacts')}>
            Контакты
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header;