import React from 'react';
import { css } from '@emotion/css';
import { Trans } from 'react-i18next';

export const Footer = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: grey;
      `}
    >
      <span
        className={css`
          color: white;
        `}
      >
        <Trans i18nKey="content.contact" />
      </span>
    </div>
  );
};
