import React from 'react';
import { SignInWithGoogle } from '../../firebase';
import { t } from 'i18next';

import './Authorization.css';

const Authorization: React.FC = () => {
  return (
    <div className="authorization">
      <div className="authorization-container">
        <h1 className="authorization-text">{t('authorization')}</h1>
        <button className="authorization-button" onClick={SignInWithGoogle}>
          {t('authorization.button_login')}
        </button>
      </div>
    </div>
  );
};

export default Authorization;
