import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

const CONTAINER_STYLE: ViewStyle = {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  justifyContent: 'center',
  alignItems: 'center',
};

const IMAGE_STYLE: ImageStyle = {
  width: '100%',
  height: '50%',
};
const HEADER_STYLE: TextStyle = {
  fontSize: 28,
};
const SUB_HEADER_STYLE: TextStyle = {
  fontSize: 16,
};
const BUTTON_TEXT_STYLE: TextStyle = {
  fontSize: 16,
  textDecorationLine: 'underline',
  textDecorationColor: '#0000ff',
  color: '#0000ff',
};
export default {
  CONTAINER_STYLE,
  IMAGE_STYLE,
  HEADER_STYLE,
  SUB_HEADER_STYLE,
  BUTTON_TEXT_STYLE,
};
