import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className="Toolbar">
            <div className="LogoContainer">
                <Logo/>
            </div>
            <nav className="DesktopOnly">
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </header>
    );
};

export default Toolbar;