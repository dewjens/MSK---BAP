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
    <ul className={style.languagepicker}>
      <a href="#nl"><li><img src="http://i65.tinypic.com/2d0kyno.png"/>Nederlands</li></a>
      <a href="#en"><li><img src="http://i64.tinypic.com/fd60km.png"/>English</li></a>
      <a href="#de"><li><img src="http://i63.tinypic.com/10zmzyb.png"/>German</li></a>
      <a href="#fr"><li><img src="http://i65.tinypic.com/300b30k.png"/>Français</li></a>
      <a href="#es"><li><img src="http://i68.tinypic.com/avo5ky.png"/>Español</li></a>
      <a href="#it"><li><img src="http://i65.tinypic.com/23jl6bn.png"/>Italiano</li></a>
    </ul>


    </div>
  </div>
);

export default Interface;
