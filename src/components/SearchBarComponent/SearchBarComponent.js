import React, { useContext, useRef, useState } from 'react';
import { Context } from '../../YoutubeClientApp';
import { SearchBar } from './styles';

export const SearchBarComponent = () => {
    const { search } = useContext(Context);
    const inputRef = useRef();
    const buttonRef = useRef();
    const [searchInput, setSearchInput] = useState('');

    const handleSearchButton = () => {
        if(searchInput === '') {
            inputRef.current.select();
            inputRef.current.classList.add('open');
        } else {
            search.setSearchValue(searchInput);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchButton();
    }

    const handleInputFocus = () => {
        //console.log(buttonRef.current)
    }

    const handleInputFocusOut = (e) => {
        if(searchInput === '') {
            inputRef.current.classList.remove('open');
        }
    }

    return (
        <SearchBar>
            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
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
            </form>
        </SearchBar>
    );
}
