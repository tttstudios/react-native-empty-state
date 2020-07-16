# React Native Empty State package

![Tests](https://github.com/tttstudios/react-native-empty-state/workflows/Tests/badge.svg)

When we need to show a list of data, sometimes the data is null or empty. This empty data set still needs to keep the user informed as to why there is no data showing. Showing an empty screen, can confuse the user as there is no clear indication of what data is being returned. If there is an error/bug we should display it to the user.

Referral for [Empty View Design](http://tympanus.net/codrops/2013/01/09/designing-for-the-empty-states/)

## Detailed design

There will be 4 optional components in this view: An image, header text, sub header text and a button. This view also accepts children as props.

![demo images](https://github.com/tttstudios/react-native-empty-state/blob/master/assets/Screenshots_row1.png)

## Installation

`npm install --save @twotalltotems/react-native-empty-state-view`
or
`yarn add @twotalltotems/react-native-empty-state-view`

## Usage

```js
import EmptyStateView from '@twotalltotems/react-native-empty-state';

...

    <EmptyStateView
        imageSource={require('./assets/emptyImage.png')}
        headerText="You have Nothing"
        subHeaderText="Please add more content"
        buttonText="Next"
    />

```

## More Advanced Usage

```js
import EmptyStateView from '@twotalltotems/react-native-empty-state'

...

    <EmptyStateView
        imageSource={require('./assets/emptyImage.png')}
        headerText="You have Nothing"
        subHeaderText="Please add more content"
        buttonText="Next"
        buttonStyle={styles.buttonStyle}
        headerTextStyle={styles.headerTextStyle}
        subHeaderTextStyle={styles.subHeaderTextStyle}
    >
        <Text>Extra descriptive text</Text>
    </EmptyStateView>

const styles = StyleSheet.create({
  headerTextStyle: {
    color: "#ff0000",
    fontSize: 34,
  },

  subHeaderTextStyle: {
    fontSize: 14,
    fontStyle: 'italic'
  },

  buttonStyle: {
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1
  },
});

```

## Parameters

| Parameter          | Required | Description                         |
| ------------------ | -------- | ----------------------------------- |
| imageSource        | NO       | Source of the main image            |
| imageStyle         | NO       | Main image styles                   |
| headerText         | NO       | Main header text                    |
| headerTextStyle    | NO       | Main header text style              |
| subHeaderText      | NO       | Sub header text                     |
| subHeaderTextStyle | NO       | Sub header text style               |
| style              | NO       | Main style for the container        |
| buttonText         | NO       | Text for the button in view         |
| buttonTextStyle    | NO       | Button text style                   |
| buttonStyle        | NO       | Button style                        |
| onButtonClick      | NO       | Callback when the button is clicked |
| children           | NO       | Additional children for render      |

## Inspiration from:

[DZNEmptyDataSet](https://github.com/dzenbot/DZNEmptyDataSet)

## Contributors

<table>
    <tr border="0" style="border: none; ">
        <th border="0" style="border-left: none; border-right: none;">
        	<img src="https://avatars3.githubusercontent.com/u/60905710?s=400&v=4" width="60px;" style="border-radius: 50%;"/>
        	<br />
        	<sub><a href="https://github.com/ericdao-ttt">Eric Dao</a></sub> <br />
        </th>
    </tr>
</table>

## Premium Support By TTT Studios

React native empty-state-view is presented by the mobile team at [TTT Studios](https://ttt.studio). We are a Digital Innovation Studio based out of Vancouver, Canada, delivering custom software and solutions that are designed and developed 100% in-house. The technologies we work with include AR & VR, IoT, AI, security & encryption, and cloud computing.

<div align="right">
	<img src="https://ttt.studio/wp-content/themes/tttwordpresstheme/imgs/ttt-colour.png" width="200px"/>
	<h5>Empowering Business Through Technology</h5>
</div>
