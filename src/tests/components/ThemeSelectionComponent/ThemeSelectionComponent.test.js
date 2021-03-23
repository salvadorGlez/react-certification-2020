import { mount } from 'enzyme';
import { ThemeSelectionComponent } from '../../../components/ThemeSelectionComponent/ThemeSelectionComponent';

describe('Tests in <ThemeSelectionContainer />', () => {
    test('should add and remove class "dark-theme" to div', () => {
        const wrapper = mount(<ThemeSelectionComponent />);
        const div = wrapper.find('div');
        const moonButton = wrapper.find('.moon__button');
        const sunButton = wrapper.find('.sun__button');
        
        moonButton.simulate('click');
        expect(div.instance().className.includes('dark--theme')).toBe(true);
        sunButton.simulate('click');
        expect(div.instance().className.includes('dark--theme')).toBe(false);
    });
});
