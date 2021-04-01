import React, { useContext, useEffect, useState } from 'react';
import { Home } from './styles';
import { VideosContainer } from '../../components/VideosContainer/VideosContainer';
import { getVideos } from '../../helpers/getVideos';
import { Context } from '../../YoutubeClientApp';
import { useFetchVideos } from '../../hooks/useFetchVideos';

export const HomeContainer = () => {
    const { search } = useContext(Context);

    const { data:videos, loading } = useFetchVideos(search.value);

    return (
        <Home>
            <h1>Home videos</h1>
            <hr />
            {loading ? (
                <div>Laoding</div>
            ) : (
                <VideosContainer videos={ videos } />
            )}
        </Home>
    );
}
