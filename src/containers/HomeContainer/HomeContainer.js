import React from 'react';
import { Home } from './styles';
import { VideosContainer } from '../../components/VideosContainer/VideosContainer';
import { getVideos } from '../../helpers/getVideos';

export const HomeContainer = () => {
    const ytData = require('../../data/videos.json');
    const videos = getVideos(ytData);

    return (
        <Home>
            <h1>Home videos</h1>
            <hr />
            <VideosContainer videos={ videos } />
        </Home>
    );
}
