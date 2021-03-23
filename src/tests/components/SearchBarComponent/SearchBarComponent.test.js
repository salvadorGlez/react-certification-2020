import { mount } from 'enzyme';
import { SearchBarComponent } from '../../../components/SearchBarComponent/SearchBarComponent';


describe('Tests in <SearchBarComponent />', () => {
    test('should add and remove class "open" to the input', () => {
        const wrapper = mount(<SearchBarComponent />);
        const input = wrapper.find('input');
        
        expect(input.instance().className.includes('open')).toBe(false);
        wrapper.find('button').simulate('click');
        expect(input.instance().className.includes('open')).toBe(true);
        input.simulate('blur');
        expect(input.instance().className.includes('open')).toBe(false);
    });
});
