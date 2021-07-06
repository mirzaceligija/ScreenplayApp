import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact> Home</NavigationItem>
        <NavigationItem link="/rating"> Rating</NavigationItem>
        { !props.isAuthenticated
            ? <NavigationItem link="/login"> SignIn</NavigationItem>
            : <NavigationItem link="/logout"> LogOut </NavigationItem>  
        }
    </ul>
);

export default NavigationItems;