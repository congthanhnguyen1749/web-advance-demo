import { css } from '@emotion/css';
import React from 'react';
import logo from '../HomePage/logo.svg';
import i18n from '../../../locales/i18n';

export const Header = () => {
  const boxShadow = '4px 5px 10px rgba(0, 0, 0, 0.5)';
  const changeLanguage = function (e) {
    i18n.changeLanguage(e.target.value);
  };
  return (
    // EMOTIONS css
    <div
      className={css`
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: ${boxShadow};
      `}
    >
      <div
        className={css`
          width: 20%;
          background-color: #fff;
          display: flex;
          justify-content: center;
        `}
      >
        <img
          src={logo}
          className={css`
            width: 10vh;
            height: 10vh;
            animation: router 5s linear infinite;

            @keyframes router {
              0% {
                left: 0px;
                top: 0px;
                transform: rotate(0deg);
              }
              100% {
                left: 0px;
                top: 0px;
                transform: rotate(300deg);
              }
            }
          `}
          alt="logo"
        />
      </div>

      <div
        className={css`
          width: 300px;
          height: 5vh;
          background-color: #fff;
          position: absolute;
          right: 5%;
        `}
      >
        <select
          className={css`
            width: 300px;
            height: 5vh;
            background-color: #fff;
            outline: none;
            border: none;
            box-shadow: ${boxShadow};
          `}
          onChange={changeLanguage}
        >
          <option value="jp">Japanese</option>
          <option value="vi">Vietnamese</option>
          <option value="ko">Korean</option>
          <option value="en">English</option>
          <option value="ru">Russia</option>
        </select>
      </div>
    </div>
  );
};
