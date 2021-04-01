import { shallow } from 'enzyme';
import { VideoContainer } from '../../../components/VideoContainer/VideoContainer';
import { getVideos } from '../../../helpers/getVideos';

describe('Tests in <VideoContainer />', () => {
    const ytData = require('../../../data/videos.json');
    const [video] = getVideos(ytData);
    const wrapper = shallow(<VideoContainer video={ video } />);
   
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should the video title be displayed correctly', () => {
        expect(wrapper.find('span').text()).toBe(video.title);
    });
    
    test('should the video channel be a link to the channels page and be displayed correctly', () => {
        const a = wrapper.find('a');
        expect(a.text()).toBe(video.channel.title);
        expect(a.prop('href')).toBe(`https://www.youtube.com/channel/${ video.channel.id }`);
    });
    
});
