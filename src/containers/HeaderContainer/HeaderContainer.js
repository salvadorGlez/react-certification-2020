import React, { useRef, useState } from 'react';
import { MenuComponent } from '../../components/MenuComponent/MenuComponent';
import { Header } from './styles';

export const HeaderContainer = () => {
    const inputRef = useRef();
    const buttonRef = useRef();
    const sectionRef = useRef();
    const [searchInput, setSearchInput] = useState('');

    const handleSearchButton = () => {
        if(searchInput === '') {
            inputRef.current.select();
            inputRef.current.classList.add('open');
        } else {
            console.log(`Search: ${ searchInput }`);
        }
    }

    const handleInputFocus = () => {
        //console.log(buttonRef.current)
    }

    const handleInputFocusOut = (e) => {
        if(searchInput === '') {
            inputRef.current.classList.remove('open');
        }
    }

    const toggleTheme = () => {
        sectionRef.current.classList.toggle('dark--theme');
        
    }

    return (
        <Header>
            <MenuComponent />
            <div className="section search__section">
                <button
                    ref={ buttonRef }
                    className="btn"
                    onClick={ handleSearchButton }
                >
                    <i className="fas fa-search"></i>
                </button>
                <input
                    ref={ inputRef }
                    type="text"
                    className="otro"
                    value={ searchInput }
                    onChange={(e) => setSearchInput(e.target.value)}
                    onFocus={ handleInputFocus }
                    onBlur={ handleInputFocusOut }
                />
            </div>
            <div ref={ sectionRef } className="section theme__section">
                <button
                    className="btn moon__button"
                    onClick={ toggleTheme }
                >
                    <i className="fas fa-moon"></i>
                </button>
                <button
                    className="btn sun__button"
                    onClick={ toggleTheme }
                >
                    <i className="fas fa-sun"></i>
                </button>
            </div>
            <div className="section user__section">
                <button className="btn login__button">
                    Log in
                </button>
            </div>
        </Header>
    );
}
