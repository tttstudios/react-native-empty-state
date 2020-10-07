/// <reference path="index.d.ts" />
import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { EmptyStateViewProps } from '@twotalltotems/react-native-empty-state';
import styles from './styles';

export default class EmptyStateView extends React.Component<EmptyStateViewProps> {
  static defaultProps: EmptyStateViewProps = {
    headerText: "Empty State View",
    style: styles.CONTAINER_STYLE,
  };

  render() {
    const {
      imageSource,
      imageStyle: overrideImageStyle,
      headerText,
      headerTextStyle: overrideHeaderStyle,
      subHeaderText,
      subHeaderTextStyle: overrideSubHeaderStyle,
      buttonStyle,
      buttonText,
      buttonTextStyle: overrideButtonTextStyle,
      children,
      onButtonClick,
      style,
    } = this.props;
    const imageStyle = { ...styles.IMAGE_STYLE, ...overrideImageStyle };
    const headerTextStyle = { ...styles.HEADER_STYLE, ...overrideHeaderStyle };
    const subHeaderTextStyle = { ...styles.SUB_HEADER_STYLE, ...overrideSubHeaderStyle };
    const buttonTextStyle = { ...styles.BUTTON_TEXT_STYLE, ...overrideButtonTextStyle };

    return (
      <View testID="containerView" style={style}>
        {!!imageSource && <Image source={imageSource} style={imageStyle} />}
        {!!headerText && (
          <Text testID="headerText" style={headerTextStyle}>
            {headerText}
          </Text>
        )}
        {!!subHeaderText && <Text style={subHeaderTextStyle}>{subHeaderText}</Text>}
        {!!buttonText && (
          <TouchableOpacity testID="testButton" onPress={onButtonClick} style={buttonStyle}>
            <Text style={buttonTextStyle}>{buttonText}</Text>
          </TouchableOpacity>
        )}
        {children}
      </View>
    );
  }
}
