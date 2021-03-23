import { mount, shallow } from 'enzyme';
import { HeaderContainer } from '../../../containers/HeaderContainer/HeaderContainer';


describe('Tests in <HeaderContainer />', () => {
    let wrapper = mount(<HeaderContainer />);

    beforeEach(() => {
        wrapper = mount(<HeaderContainer />);
    });

    test('should ', () => {
        
    })
    
    
    // test('should add and remove class "dark-theme" to div', () => {
    //     const div = wrapper.find('.theme__section');
    //     const moonButton = wrapper.find('.moon__button');
    //     const sunButton = wrapper.find('.sun__button');
    //     moonButton.simulate('click');
    //     expect(div.instance().className.includes('dark--theme')).toBe(true);
    //     sunButton.simulate('click');
    //     expect(div.instance().className.includes('dark--theme')).toBe(false);
    // });

});

