import styled from 'styled-components';

export const Header = styled.div`
    box-shadow: 0px 0px 5px -2px #000;
    padding: 10px 15px;
    display: flex;
    align-items: center;

    .section {
        padding: 0px 20px;
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