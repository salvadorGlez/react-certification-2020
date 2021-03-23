import { getVideos } from '../../helpers/getVideos';

describe('Tests of getVideos.js', () => {
    const ytData = require('../../data/videos.json');
    const videos = getVideos(ytData);
   
    test('should return an array', () => {
        expect(Array.isArray(videos)).toBe(true);
    });

    test('should return at least 1 element', () => {
        expect(videos.length).toBeGreaterThan(0);
    });

    test('should return the correct data structure', () => {
        const ytData = {
            "items": [
                {
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "123asd"
                    },
                    "snippet": {
                        "channelId": "asd123",
                        "title": "Test",
                        "description": "This is a test",
                        "thumbnails": {
                            "medium": {
                                "url": "https://localhost/test.jpg"
                            }
                        },
                        "channelTitle": "Testing"
                    }
                }
            ]
        };
        const videos = getVideos(ytData);
        const video = [{
            id: '123asd',
            title: 'Test',
            description: 'This is a test',
            channel: { id: 'asd123', title: 'Testing' },
            thumbnailUrl: 'https://localhost/test.jpg'
        }];

        expect(videos).toEqual(video);
    });
    
});
