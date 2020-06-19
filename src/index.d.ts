/**
 * Typescript declaration file created for react-native-empty-state
 * Created by: Eric Dao
 */
declare module '@twotalltotems/react-native-empty-state' {
  import * as React from 'react';
  import { TextStyle, ViewStyle, ImageStyle } from 'react-native';

  export interface EmptyStateViewProps {
    /**
     * Image source
     */
    imageSource?: number;
    /**
     * Main image style
     */
    imageStyle?: ImageStyle | ImageStyle[];
    /**
     * Style of the header
     */
    headerText?: string;
    /**
     * Style of the header
     */
    headerTextStyle?: TextStyle | TextStyle[];
    /**
     * Style of the header
     */
    infoText?: string;
    /**
     * Style of the header
     */
    infoTextStyle?: TextStyle | TextStyle[];
    /**
     * Style for the container
     */
    style?: ViewStyle | ViewStyle[];
    /**
     * Button Text
     */
    buttonText?: string;
    /**
     * Button Text style
     */
    buttonTextStyle?: TextStyle | TextStyle[];
    /**
     * Button Style
     */
    buttonStyle?: ViewStyle | ViewStyle[];
    /**
     * Callback function
     * Trigger when a the button inside is clicked
     */
    onButtonClick?: () => void;
    /**
     * Children
     */
    children?: React.ReactNode;
  }

  export interface OTPInputViewState {
    digits: string[];
    selectedIndex: number;
  }

  export default class EmptyStateView extends React.Component<EmptyStateViewProps> {}
}
