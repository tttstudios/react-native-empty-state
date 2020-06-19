/// <reference path="index.d.ts" />
import * as React from 'react';
import { View, Image } from 'react-native';
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
      style,
    } = this.props;
    return <View testID="containerView">{!!imageSource && <Image source={imageSource} />}</View>;
  }
}
