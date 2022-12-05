import React from 'react';
import { css } from '@emotion/css';
import { Trans } from 'react-i18next';

export const Content = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          width: 70%;
          font-size: 20px;
        `}
      >
        <Trans i18nKey="content.text" />
      </div>
    </div>
  );
};
