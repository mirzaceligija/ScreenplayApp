import React from 'react';

import appLogo from '../../assets/images/logo.png';
import './Logo.css';

const logo = () => (
    <div className="Logo">
        <img src={appLogo} alt="AppLogo"></img>
    </div>
);

export default logo;