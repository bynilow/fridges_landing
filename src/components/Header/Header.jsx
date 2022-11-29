import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import s from './header.module.css'

function Header({ width }) {
  return (
    <header>
      <div className={s.container}>
        <div className={s.logo_c}>
          <Logo />
        </div>
        <div className={s.header_buttons}>
          <a className={s.header_link} href="#">Бренды</a>
          <a className={s.header_link} href="#">Цены</a>
          <a className={s.header_link} href="#">Отзывы</a>
          <a className={s.header_link} href="#">О нас</a>
          <a className={s.header_link} href="#">Контакты</a>
        </div>
      </div>
    </header>
  )
}

export default Header;