import styled from 'styled-components';

export const SearchBar = styled.div`
    padding: 0px 20px;
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
`;