import React, { useRef } from 'react';
import { ThemeSelection } from './styles';

export const ThemeSelectionComponent = () => {
    const sectionRef = useRef();

    const toggleTheme = () => {
        sectionRef.current.classList.toggle('dark--theme');   
    }

    return (
        <ThemeSelection ref={ sectionRef }>
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
        </ThemeSelection>
    );
}
