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
    
});
