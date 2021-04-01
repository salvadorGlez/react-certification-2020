import React, { createContext, useState } from 'react';
import { HeaderContainer } from './containers/HeaderContainer/HeaderContainer';
import { HomeContainer } from './containers/HomeContainer/HomeContainer';

export const Context = createContext();

export const YoutubeClientApp = () => {
    const [searchValue, setSearchValue] = useState('Wizeline');
    const [themeValue, setThemeValue] = useState('light');
    const contextValue = {
        search: {
            value: searchValue, setSearchValue
        },
        theme: {
            value: themeValue, setThemeValue
        }
    };

    return (
        <Context.Provider value={ contextValue }>
            <HeaderContainer />
            <HomeContainer />
        </Context.Provider>
    );
}
