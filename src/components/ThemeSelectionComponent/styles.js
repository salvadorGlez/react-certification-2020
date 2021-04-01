import styled from 'styled-components';

export const ThemeSelection = styled.div`
    padding: 0px 20px;
    overflow: hidden;
    position: relative;
    height: 31px;
    width: 30px;
    margin-left: auto;
    &.dark--theme {

        .sun__button {
            bottom: 0;
        }

        .moon__button {
            bottom: -30px;
        }
    }

    button {
        position: absolute;
        transition: all 250ms;
        
        i {
            font-size: 20px;
        }

        .fa-sun {
            color: #F7DC6F;
        }

        .fa-moon {
            color: #424242;
        }
    }

    .sun__button {
        bottom: -30px;
    }

    .moon__button {
        bottom: 0;
    }

`;