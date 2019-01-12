import React from 'react';
import PropTypes from 'prop-types';
import style from './ui.css';
import logo from '../../assets/img/msk.png';

const Interface = ({ title }) => (
  <div className={style.headerUI}>
    <div className={style.info}>{title}</div>
    <h1 className={style.logo}>
      <a href="https://www.mskgent.be/nl/tentoonstellingen/van-eyck">
        <img src={logo} width="80" height="70" alt="MSK" />
      </a>
    </h1>
  </div>
);

Interface.propTypes = {
  title: PropTypes.instanceOf(Element)
};

export default Interface;
