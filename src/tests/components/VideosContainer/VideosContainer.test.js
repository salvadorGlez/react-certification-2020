import { shallow } from 'enzyme';
import { VideosContainer } from '../../../components/VideosContainer/VideosContainer';
import { getVideos } from '../../../helpers/getVideos';

describe('Test in <VideosContainer />', () => {
   
    test('should show "videos.length" of <VideoContainer />', () => {
        const ytData = require('../../../data/videos.json');
        const videos = getVideos(ytData);
        const wrapper = shallow(<VideosContainer videos={ videos } />);
        expect(wrapper.find('VideoContainer')).toHaveLength(videos.length);
    });
    
});
