import React from 'react';
import { MenuComponent } from '../../components/MenuComponent/MenuComponent';
import { ProfileComponent } from '../../components/ProfileComponent/ProfileComponent';
import { SearchBarComponent } from '../../components/SearchBarComponent/SearchBarComponent';
import { ThemeSelectionComponent } from '../../components/ThemeSelectionComponent/ThemeSelectionComponent';
import { Header } from './styles';

export const HeaderContainer = () => {

    return (
        <Header>
            <MenuComponent />
            <SearchBarComponent />
            <ThemeSelectionComponent />
            <ProfileComponent />
        </Header>
    );
}
