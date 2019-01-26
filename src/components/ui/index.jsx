import React from 'react';
import style from './ui.css';
import logo from '../../assets/img/msk.png';
/* eslint react/prop-types: 0 */
const Interface = ({ title }) => (
  <div className={style.headerUI}>
    <div className={style.audio} />
    <div className={style.info}>{title}</div>
    <h1 className={style.logo}>
      <a href="https://www.mskgent.be/nl/tentoonstellingen/van-eyck">
        <img
          className={style.msk}
          src={logo}
          width="80"
          height="70"
          alt="MSK"/>
      </a>
    </h1>
    <div className={style.languages}>
      <ul className={style.translationList}>
        <li className={style.translationItem}>NL</li>
        <li className={style.translationItem}>DE</li>
        <li className={style.translationItem}>FR</li>
        <li className={style.translationItem}>EN</li>
      </ul>
    </div>
  </div>
);

export default Interface;
