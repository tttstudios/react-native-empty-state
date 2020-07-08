import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import EmptyStateView from '../src/index';

const setup = (props = {}) => {
  const wrapper = shallow(<EmptyStateView {...props} />);
  return wrapper;
};

describe('EmptyStateView renders correclty.', () => {
  let shallowWrapper;
  it('EmptyStateView view renders correctly.', () => {
    shallowWrapper = setup();
    const EmptyStateView = shallowWrapper.find({ testID: 'containerView' });

    expect(EmptyStateView.length).toBe(1);
  });

  it('Render text header correctly.', () => {
    headerText = 'You have nothing';
    shallowWrapper = setup({ headerText });
    const headerTextView = shallowWrapper.find({ testID: 'headerText' });
    expect(headerTextView.props().children).toBe(headerText);
  });
});
describe('Functions work.', () => {
  let shallowWrapper;

  it('Click button, function to be called.', () => {
    const buttonClick = jest.fn();
    shallowWrapper = setup({ buttonText: 'Next', onButtonClick: buttonClick });
    const button = shallowWrapper.find({ testID: 'testButton' });
    button.props().onPress();
    expect(buttonClick).toBeCalled();
  });
});
