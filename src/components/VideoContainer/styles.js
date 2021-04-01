import styled from 'styled-components';

export const Video = styled.div`
    @keyframes showTooltip {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    margin: 15px;
    width: 320px;
    box-shadow: 0px 1px 3px -1px #000;
    border-radius: 4px;

    .img__container {
        width: 320px;
        height: 180px;
        position: relative;
        overflow: hidden;
        border-radius: 5px 5px 0px 0px;
        :hover {

            .img {
                filter: grayscale(100%) blur(4px) brightness(50%);
            }

            .video__desc {
                //visibility: visible;
                opacity: 1;
            }
        }
        
        .img {
            transition: all 100ms;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('${props => props.img}');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            z-index: 1;
            backface-visibility: hidden;
        }

        .video__desc {
            z-index: 2;
            //visibility: hidden;
            transition: 250ms;
            position: relative;
            padding: 25px 20px;
            font-size: 16px;
            line-height: 18px;
            color: #fff;
            opacity: 0;
        }
    }

    .video__title {
        position: relative;
        margin: 5px 0px;
        padding: 0px 10px;
        :hover {
            .tooltip__text {
                display: inline-block;
            }
        }

        .title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #424242;
        }

        .tooltip__text {
            padding: 5px 10px;
            border-radius: 5px;
            opacity: 0;
            position: absolute;
            display: none;
            background-color: #424242;
            color: #fff;
            top: 10px;
            left: 10px;
            animation-name: showTooltip;
            animation-duration: .2s;
            //animation-delay: 1s;
            animation-fill-mode: forwards;
        }
    }

    .video__channel {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px 10px;
        margin: 5px 0px;
        
        a {
            color: #424242;
            text-decoration: none;
        }
    }
`;