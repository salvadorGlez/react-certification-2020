import React from 'react';
import { MenuComponent } from '../../components/MenuComponent/MenuComponent';
import { SearchBarComponent } from '../../components/SearchBarComponent/SearchBarComponent';
import { ThemeSelectionComponent } from '../../components/ThemeSelectionComponent/ThemeSelectionComponent';
import { Header } from './styles';

export const HeaderContainer = () => {

    return (
        <Header>
            <MenuComponent />
            <SearchBarComponent />
            <ThemeSelectionComponent />
            <div className="section user__section">
                <button className="btn login__button">
                    Log in
                </button>
            </div>
        </Header>
    );
}
