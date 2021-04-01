import searchYoutube from 'youtube-api-v3-search';
import { YoutubeApiCrendetial } from '../constants/apiCredentials';

export const getVideos = async(searchValue, maxResults = 20) => {

    const options = {
        q: searchValue,
        part: 'snippet',
        type: 'video',
        maxResults,
      }

    const { items } = await searchYoutube(YoutubeApiCrendetial, options);
    
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

    return videos;

}
