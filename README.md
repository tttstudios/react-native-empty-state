# React Native Empty State package

![Tests](https://github.com/tttstudios/react-native-empty-state/workflows/Tests/badge.svg)

When we use list or table, sometimes the data is null or empty, so there is a need to display the state of them instead of showing nothing. Empty screens make user confuse because not clearing about what's going on, if there is an error/bug or just because no data to show.

Referral for [Empty View Design](http://tympanus.net/codrops/2013/01/09/designing-for-the-empty-states/)
## Detailed design

There will be 4 parts in this component: An image displays empty state, a header text, a sub header text and a button. We also accept children that pass into this view a props.

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
import OTPInputView from '@twotalltotems/react-native-empty-state'

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
        <Text>Hello world</Text>
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

| Parameter          | Required | Description                                         |
| ------------------ | -------- | --------------------------------------------------- |
| imageSource        | NO       | Source of the main image                            |
| imageStyle         | NO       | Main image Styles                                   |
| headerText         | NO       | Main header text                                    |
| headerTextStyle    | NO       | Main header text style                              |
| subHeaderText      | NO       | Sub header text                                     |
| subHeaderTextStyle | NO       | Sub header text style                               |
| style              | NO       | Main style for the container                        |
| buttonText         | NO       | Text for the button in view                         |
| buttonTextStyle    | NO       | Button text style                                   |
| buttonStyle        | NO       | Button text style                                   |
| onButtonClick      | NO       | Callback, Trigger when the button inside is clicked |
| children           | NO       | Accept Children inside the View                     |

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
