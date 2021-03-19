import React, { useRef } from 'react'
import { Video } from './styles';

export const VideoContainer = ({ video }) => {
    const spanRef = useRef();

    const {
        // id,
        title,
        description,
        channel,
        thumbnailUrl
    } = video;

    return (
        <Video img={ thumbnailUrl }>
            <div className="img__container">
                <div className="img"></div>
                <p className="video__desc">{ description }</p>
            </div>
            <div className="video__title">
                <h3 className="title">
                    { title }
                </h3>
                <span
                    ref={ spanRef }
                    className="tooltip__text"
                >
                    { title }
                </span>
            </div>
            <div className="video__channel">
                <a
                    href={ `https://www.youtube.com/channel/${ channel.id }` }
                    target="_blank"
                    rel="noreferrer"
                >
                    { channel.title }
                </a>
            </div>
        </Video>
    )
}
