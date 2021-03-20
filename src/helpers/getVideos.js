
export const getVideos = ({ items }) => {
    
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
