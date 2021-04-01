import React, { useEffect, useState } from 'react';
import { getVideos } from '../helpers/getVideos';

export const useFetchVideos = (searchValue) => {
    const stateValue = {
        data: [],
        loading: true
    };
    const [state, setState] = useState(stateValue);

    useEffect(() => {
        setState(stateValue);

        getVideos(searchValue)
            .then((videos) => {
                setState({
                    data: videos,
                    loading: false
                });
            });
    }, [searchValue]);

    return state;
}
