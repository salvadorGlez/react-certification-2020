import React from 'react';
import { Home } from './styles';
import { VideosContainer } from '../../components/VideosContainer/VideosContainer';

export const HomeContainer = () => {
    const { items } = require('../../data/videos.json');

    const videos = items
        .filter(item => item.id.kind.includes('video'))
        .map(({ id, snippet }) => ({
            id: id.videoId,
            title: snippet.title,
            description: snippet.description,
            channel: {
                id: snippet.channelId,
                title: snippet.channelTitle,
            },
            thumbnailUrl: snippet.thumbnails.medium.url
        }));

    return (
        <Home>
            <h1>Home videos</h1>
            <hr />
            <VideosContainer videos={ videos } />
        </Home>
    );
}
