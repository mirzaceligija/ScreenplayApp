import React from 'react';
import Aux from '../Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

const Layout = (props) => {
    return(
        <Aux>
            <Toolbar isAuth={props.isAuth}/>
            <main className="Container">
                {props?.children}
            </main>
        </Aux>
    );
};

export default Layout;
