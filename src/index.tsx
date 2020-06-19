/// <reference path="index.d.ts" />
import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { EmptyStateViewProps } from '@twotalltotems/react-native-empty-state';
import styles from './styles';

export default class EmptyStateView extends React.Component<EmptyStateViewProps> {
  static defaultProps: EmptyStateViewProps = {
    style: styles.CONTAINER_STYLE,
  };

  render() {
    const {
      imageSource,
      imageStyle,
      headerText,
      headerTextStyle,
      infoText,
      infoTextStyle,
      buttonStyle,
      buttonText,
      buttonTextStyle,
      children,
      onButtonClick,
      style,
    } = this.props;
    return (
      <View testID="containerView" style={style}>
        {!!imageSource && <Image source={imageSource} style={imageStyle} />}
        {headerText && <Text style={headerTextStyle}>{headerText}</Text>}
        {infoText && <Text style={infoTextStyle}>{infoText}</Text>}
        {buttonText && (
          <TouchableOpacity onPress={onButtonClick} style={buttonStyle}>
            <Text style={buttonTextStyle}>{buttonText}</Text>
          </TouchableOpacity>
        )}
        {children}
      </View>
    );
  }
}
