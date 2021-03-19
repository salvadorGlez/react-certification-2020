import React from 'react';
import { VideoContainer } from '../VideoContainer/VideoContainer';
import { Videos } from './styles';

export const VideosContainer = ({ videos }) => {
    return (
        <Videos>
            { videos.map((video) => (
                <VideoContainer key={ video.id } video={ video } />
            )) }
        </Videos>
    )
}
