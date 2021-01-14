import React from 'react';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    )
}

export default Header;