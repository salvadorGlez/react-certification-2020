import styled from 'styled-components';

export const Header = styled.div`
    box-shadow: 0px 0px 5px -2px #000;
    padding: 10px 15px;
    display: flex;
    align-items: center;

    .section {
        padding: 0px 20px;
    }

    .search__section {
        position: relative;

        button {
            position: absolute;
            right: 20px;
            width: 45px;
            height: 31px;
            top: 1px;
            transition: all 120ms;
            
            .fa-search {
                font-size: 18px;
                color: #424242;
            }
        }
        
        input {
            :focus {
                box-shadow: 0px 0px 5px 0px #5DADE2;
            }
            &.open {
                max-width: 400px;
            }
            max-width: 25px;
            transition: all 120ms;
            padding: 5px 10px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            background-color: #EAEDED;
            outline: none;
            color: #424242;
        }
    }

    .theme__section {
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
    }

    .user__section {

        .login__button {
            border: 1px solid #424242;
            transition: all 80ms;
            padding: 8px 20px;
            :hover {
                color: #fff;
                background-color: #424242;
            }
        }
    }
`;