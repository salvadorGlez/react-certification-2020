import React from 'react';
import { Menu } from './styles';

export const MenuComponent = () => {

    const openMenu = () => {
        console.log('openMenu');
    }

    return (
        <Menu>
            <button
                className="btn"
                onClick={ openMenu }
            >
                <i className="fas fa-bars"></i>
            </button>
        </Menu>
    )
}
